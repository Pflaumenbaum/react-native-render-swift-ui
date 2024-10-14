import ExpoModulesCore
import Kingfisher
import SwiftUI

struct ViewFactory: PresentableProtocol {
    private let material: ViewMaterial
    private let children: [UIView]?
    private let onEvent: EventDispatcher
    init(material: ViewMaterial, children: [UIView]? = nil, onEvent: EventDispatcher) {
        self.material = material
        self.children = children
        self.onEvent = onEvent
    }

    // MARK: - ScrollView

    @ViewBuilder func scrollView() -> some View {
        if let subviews = material.subviews {
            let axisKey = material.properties?.axis ?? "vertical"
            let axis = Axis.Set.pick[axisKey] ?? .vertical
            let showsIndicators = material.properties?.showsIndicators ?? true

            ScrollView(axis, showsIndicators: showsIndicators) {
                AxisBasedStack(axis: axis) {
                    ForEach(subviews) { subview in
                        ViewFactory(material: subview, children: children, onEvent: onEvent).toPresentable()
                    }
                }
            }
        } else {
            ErrorMessage(message: "Make sure you have defined a SubView for ScrollView")
        }
    }

    // MARK: - List

    @ViewBuilder func list() -> some View {
        if let subviews = material.subviews {
            List(subviews) {
                ViewFactory(material: $0, children: children, onEvent: onEvent).toPresentable()

            }.modifier(ModifierFactory.ListStyleModifer(style: material.properties?.listStyle ?? ""))

        } else {
            ErrorMessage(message: "Make sure you have defined a SubView for List")
        }
    }

    // MARK: - Section

    @ViewBuilder func section() -> some View {
        if let subviews = material.subviews, let optionalSubviews = material.optionalSubviews {
            Section(header: ViewFactory(material: optionalSubviews[0], children: children, onEvent: onEvent).toPresentable()) {
                ForEach(subviews) {
                    ViewFactory(material: $0, children: children, onEvent: onEvent).toPresentable()
                }
            }

        } else {
            ErrorMessage(message: "Make sure you have defined a SubView and an optional SubView for Section")
        }
    }

    // MARK: - VStack

    @ViewBuilder func vstack() -> some View {
        if let subviews = material.subviews {
            let spacing = material.properties?.spacing.toCGFloat() ?? 0
            let horizontalAlignmentKey = material.properties?.horizontalAlignment ?? "center"
            let horizontalAlignment = HorizontalAlignment.pick[horizontalAlignmentKey] ?? .center
            VStack(alignment: horizontalAlignment, spacing: spacing) {
                ForEach(subviews) {
                    ViewFactory(material: $0, children: children, onEvent: onEvent).toPresentable()
                }
            }
        } else {
            ErrorMessage(message: "Make sure you have defined a SubView for VStack")
        }
    }

    // MARK: - LazyVStack

    @ViewBuilder func lazyVstack() -> some View {
        if let subviews = material.subviews {
            let spacing = material.properties?.spacing.toCGFloat() ?? 0
            let horizontalAlignmentKey = material.properties?.horizontalAlignment ?? "center"
            let horizontalAlignment = HorizontalAlignment.pick[horizontalAlignmentKey] ?? .center
            LazyVStack(alignment: horizontalAlignment, spacing: spacing) {
                ForEach(subviews) {
                    ViewFactory(material: $0, children: children, onEvent: onEvent).toPresentable()
                }
            }
        } else {
            ErrorMessage(message: "Make sure you have defined a SubView for LazyVStack")
        }
    }

    // MARK: - HStack

    @ViewBuilder func hstack() -> some View {
        if let subviews = material.subviews {
            let spacing = material.properties?.spacing.toCGFloat() ?? 0
            let verticalAlignmentKey = material.properties?.verticalAlignment ?? "center"
            let verticalAlignment = VerticalAlignment.pick[verticalAlignmentKey] ?? .center
            HStack(alignment: verticalAlignment, spacing: spacing) {
                ForEach(subviews) {
                    ViewFactory(material: $0, children: children, onEvent: onEvent).toPresentable()
                }
            }
        } else {
            ErrorMessage(message: "Make sure you have defined a SubView for LazyHStack")
        }
    }

    // MARK: - HStack

    @ViewBuilder func lazyHstack() -> some View {
        if let subviews = material.subviews {
            let spacing = material.properties?.spacing.toCGFloat() ?? 0
            let verticalAlignmentKey = material.properties?.verticalAlignment ?? "center"
            let verticalAlignment = VerticalAlignment.pick[verticalAlignmentKey] ?? .center
            LazyHStack(alignment: verticalAlignment, spacing: spacing) {
                ForEach(subviews) {
                    ViewFactory(material: $0, children: children, onEvent: onEvent).toPresentable()
                }
            }
        } else {
            ErrorMessage(message: "Make sure you have defined a HStack")
        }
    }

    // MARK: - ZStack

    @ViewBuilder func zstack() -> some View {
        if let subviews = material.subviews {
            ZStack {
                ForEach(subviews) {
                    ViewFactory(material: $0, children: children, onEvent: onEvent).toPresentable()
                }
            }
        } else {
            ErrorMessage(message: "Make sure you have defined a SubView for ZStack")
        }
    }

    // MARK: - NavigationView

    @ViewBuilder func navigationView() -> some View {
        if let subviews = material.subviews {
            NavigationView {
                ForEach(subviews) {
                    ViewFactory(material: $0, children: children, onEvent: onEvent).toPresentable()
                }
                .navigationTitle(material.values?.title ?? "")
                .navigationViewStyle(.stack)
            }

        } else {
            ErrorMessage(message: "Make sure you have defined a SubView for NavigationView")
        }
    }

    // MARK: - Text

    @ViewBuilder func text() -> some View {
        let fontHashValue = material.properties?.font ?? "body"
        let font = Font.pick[fontHashValue]
        let fontWeightHashValue = material.properties?.fontWeight ?? "regular"
        let fontWeight = Font.Weight.pick[fontWeightHashValue]
        let markdownEnabled = material.properties?.enableMarkdown ?? false
        if markdownEnabled {
            Text(LocalizedStringKey(material.values?.text ?? ""))
                .font(font)
                .fontWeight(fontWeight)
        }
        else {
            Text(material.values?.text ?? "")
                .font(font)
                .fontWeight(fontWeight)
        }
      
    }

    // MARK: - Label

    @ViewBuilder func label() -> some View {
        let fontHashValue = material.properties?.font ?? "body"
        let font = Font.pick[fontHashValue]
        let fontWeightHashValue = material.properties?.fontWeight ?? "regular"
        let fontWeight = Font.Weight.pick[fontWeightHashValue]
        Label(material.values?.text ?? "", systemImage: material.values?.systemIconName ?? "")
            .font(font)
    }

    // MARK: - Image

    @ViewBuilder func image() -> some View {
        if let systemIconName = material.values?.systemIconName {
            Image(systemName: systemIconName)
                .resizable()
                .scaledToFit()
        } else if let localIconName = material.values?.localImageName {
            Image(localIconName)
                .resizable()
                .scaledToFit()

        } else if let remoteUrl = material.values?.imageUrl {
            KFImage(URL(string: remoteUrl))
                .resizable()
                .scaledToFit()
        } else {
            ErrorMessage(message: "Image value could not be read")
        }
    }

    // MARK: - ContentUnavailableView

    @ViewBuilder func contentUnavailableView() -> some View {
        let fontHashValue = material.properties?.font ?? "body"
        let font = Font.pick[fontHashValue]
        let fontWeightHashValue = material.properties?.fontWeight ?? "regular"
        let fontWeight = Font.Weight.pick[fontWeightHashValue]

        if #available(iOS 17.0, *) {
            ContentUnavailableView(
                material.values?.title ?? "",
                systemImage: material.values?.systemIconName ?? "",
                description: Text(material.values?.description ?? "")
                    .font(font)
                    .fontWeight(fontWeight)
            )
        } else {
            ErrorMessage(message: "ContentUnavailableView is only available in IOS 17 and newer")
        }
    }

    // MARK: - NavigationLink

    @ViewBuilder func navigationLink() -> some View {
        if let subviews = material.subviews, let optionalSubviews = material.optionalSubviews {
            NavigationLink {
                VStack {
                    ForEach(subviews) {
                        ViewFactory(material: $0, children: children, onEvent: onEvent).toPresentable()
                    }
                }.navigationTitle(material.values?.title ?? "")
            }
            label: {
                ForEach(optionalSubviews) {
                    ViewFactory(material: $0, children: children, onEvent: onEvent).toPresentable()
                }
            }

        } else {
            ErrorMessage(message: "Make sure you have defined a SubView for NavigationLink")
        }
    }

    // MARK: - DisclosureGroup

    @ViewBuilder func disclosureGroup() -> some View {
        if let subviews = material.subviews {
            DisclosureGroup(material.values?.title ?? "") {
                ForEach(subviews) {
                    ViewFactory(material: $0, children: children, onEvent: onEvent).toPresentable()
                }
            }

        } else {
            ErrorMessage(message: "Make sure you have defined a SubView for Disclosure Group")
        }
    }

    // MARK: - Button

    @ViewBuilder func button() -> some View {
        if let subviews = material.subviews {
            Button {
                onEvent([material.values?.key ?? "Button": ["action": "press"]])
            }
            label: {
                ForEach(subviews) {
                    ViewFactory(material: $0, children: children, onEvent: onEvent).toPresentable()
                }
            }

        } else {
            ErrorMessage(message: "Make sure you have defined a SubView for Button")
        }
    }

    // MARK: - ToolbarItemGroup

    @ViewBuilder func toolbarItemGroup() -> some View {
        let placementHashValue = material.properties?.toolbarPlacement ?? "automatic"
        let placement = ToolbarItemPlacement.pick[placementHashValue] ?? .automatic

        if let subviews = material.subviews {
            VStack {}

                .toolbar {
                    ToolbarItemGroup(placement: placement) {
                        ForEach(subviews) {
                            ViewFactory(material: $0, children: children, onEvent: onEvent).toPresentable()
                        }
                    }
                }

        } else {
            ErrorMessage(message: "Make sure you have defined a SubView for ToolbarItemGroup")
        }
    }

    // MARK: - Group

    @ViewBuilder func group() -> some View {
        let fontHashValue = material.properties?.font ?? "body"
        let font = Font.pick[fontHashValue]
        let fontWeightHashValue = material.properties?.fontWeight ?? "regular"
        let fontWeight = Font.Weight.pick[fontWeightHashValue]
        if let subviews = material.subviews {
            if #available(iOS 16.0, *) {
                Group {
                    ForEach(subviews) {
                        ViewFactory(material: $0, children: children, onEvent: onEvent).toPresentable()
                    }
                    .fontWeight(fontWeight)
                    .font(font)
                }
            }

        } else {
            ErrorMessage(message: "Make sure you have defined a SubView for Group")
        }
    }

    @ViewBuilder func controlGroup() -> some View {
        let fontHashValue = material.properties?.font ?? "body"
        let font = Font.pick[fontHashValue]
        let fontWeightHashValue = material.properties?.fontWeight ?? "regular"
        let fontWeight = Font.Weight.pick[fontWeightHashValue]
        if let subviews = material.subviews {
            if #available(iOS 16.0, *) {
                ControlGroup {
                    ForEach(subviews) {
                        ViewFactory(material: $0, children: children, onEvent: onEvent).toPresentable()
                    }
                    .fontWeight(fontWeight)
                    .font(font)
                }
            }

        } else {
            ErrorMessage(message: "Make sure you have defined a SubView for ControlGroup")
        }
    }

    // MARK: - ContextMenu

    @ViewBuilder func contextMenu() -> some View {
        if let subviews = material.subviews, let optionalSubviews = material.optionalSubviews {
            ForEach(subviews) {
                ViewFactory(material: $0, children: children, onEvent: onEvent).toPresentable()
                    .contextMenu {
                        ForEach(optionalSubviews) {
                            ViewFactory(material: $0, children: children, onEvent: onEvent).toPresentable()
                        }
                    }
            }

        } else {
            ErrorMessage(message: "Make sure you have defined a SubView and an optional SubView for ContextMenu")
        }
    }

    // MARK: - PopoverView

    @ViewBuilder func popoverView() -> some View {
        if let subviews = material.subviews, let optionalSubviews = material.optionalSubviews {
            PopoverHelperView {
                ForEach(optionalSubviews) {
                    ViewFactory(material: $0, children: children, onEvent: onEvent).toPresentable()
                }

            } trigger: {
                ForEach(subviews) {
                    ViewFactory(material: $0, children: children, onEvent: onEvent).toPresentable()
                }
            }

        } else {
            ErrorMessage(message: "Make sure you have defined a SubView and an optional SubView for Popover ")
        }
    }

    // MARK: - SheetView

    @ViewBuilder func sheetView() -> some View {
        if let subviews = material.subviews, let optionalSubviews = material.optionalSubviews {
            SheetHelperView {
                ForEach(optionalSubviews) {
                    ViewFactory(material: $0, children: children, onEvent: onEvent).toPresentable()
                }

            } trigger: {
                ForEach(subviews) {
                    ViewFactory(material: $0, children: children, onEvent: onEvent).toPresentable()
                }
            }

        } else {
            ErrorMessage(message: "Make sure you have defined a SubView and an optional SubView for Popover ")
        }
    }

    // MARK: - MaskView

    @ViewBuilder func maskView() -> some View {
        if let subviews = material.subviews, let optionalSubviews = material.optionalSubviews {
            ForEach(subviews) {
                ViewFactory(material: $0, children: children, onEvent: onEvent).toPresentable()
                    .mask(
                        ForEach(optionalSubviews) {
                            ViewFactory(material: $0, children: children, onEvent: onEvent).toPresentable()
                        }
                    )
            }

        } else {
            ErrorMessage(message: "Make sure you have defined a SubView and an optional SubView for MaskView")
        }
    }

    // MARK: - NaviagtionSplitView

    @ViewBuilder func navigationSplitView() -> some View {
        if let subviews = material.subviews, let optionalSubviews = material.optionalSubviews {
            if #available(iOS 16.0, *) {
                NavigationSplitView {
                    ForEach(subviews) {
                        ViewFactory(material: $0, children: children, onEvent: onEvent).toPresentable()
                    }
                    .toolbar(.visible)
                    .navigationTitle(material.values?.title ?? "")
                } detail: {
                    ForEach(optionalSubviews) {
                        ViewFactory(material: $0, children: children, onEvent: onEvent).toPresentable()
                    }
                }

            } else {
                ErrorMessage(message: "NavigationSpllitView is only available in IOS 16 and newer")
            }

        } else {
            ErrorMessage(message: "Make sure you have defined a SubView and an optional SubView for NavigationSpllitView")
        }
    }

    // MARK: - ReactChildView

    @ViewBuilder func ReactChildView() -> some View {
        let index = material.values?.index
        if let children = children, let index = index, index < children.count {
            UIKitViewWrapper(uiView: children[index])
        } else {
            ErrorMessage(message: "Make sure you have specified an index for the ReactChildView")
        }
    }

    // MARK: - Spacer

    @ViewBuilder func spacer() -> some View {
        let minLength = material.properties?.minLength.toCGFloat()
        Spacer(minLength: minLength)
    }

    // MARK: - CustomView

    @ViewBuilder func customView() -> some View {
   
        
        if let key = material.values?.key {
            CustomView(viewKey: key , material: material, onEvent: onEvent)
        }
        else {
            ErrorMessage(message: "Please specify a native view key for the CustomView")
        }
    }

    @ViewBuilder func buildDefault() -> some View {
        switch material.type {
        case .ScrollView: scrollView()
        case .List: list()
        case .LazyVStack: lazyVstack()
        case .LazyHStack: lazyHstack()
        case .VStack: vstack()
        case .HStack: hstack()
        case .ZStack: zstack()
        case .Text: text()
        case .Image: image()
        case .Spacer: spacer()
        case .Rectangle: Rectangle()
        case .Divider: Divider()
        case .Circle: Circle()
        case .Ellipse: Ellipse()
        case .ContentUnavailableView: contentUnavailableView()
        case .NavigationLink: navigationLink()
        case .ContextMenu: contextMenu()
        case .DisclosureGroup: disclosureGroup()
        case .NavigationSplitView: navigationSplitView()
        case .ControlGroup: controlGroup()
        case .Label: label()
        case .SheetView: sheetView()
        case .PopoverView: popoverView()
        case .MaskView: maskView()
        case .ReactChildView: ReactChildView()
        case .Section: section()
        case .Button: button()
        case .CustomView: customView()
        case .NavigationView: navigationView()
        case .ToolbarItemGroup: toolbarItemGroup()
        default: EmptyView()
        }
    }

    @ViewBuilder func toPresentable() -> some View {
        let prop = material.properties

        let uiComponent = buildDefault().embedInAnyView()
        uiComponent
            .modifier(ModifierFactory.PaddingModifier(padding: prop?.padding.toCGFloat()))
            .modifier(ModifierFactory.ForegroundModifier(foregroundColor: prop?.foregroundColor.toColor()))
            .modifier(ModifierFactory.BorderModifier(
                borderColor: prop?.borderColor.toColor(),
                borderWidth: prop?.borderWidth.toCGFloat()
            ))
            .modifier(ModifierFactory.FrameModifier(
                width: prop?.width.toCGFloat(),
                height: prop?.height.toCGFloat()
            ))
            .modifier(ModifierFactory.BackgroundColorModifer(
                backgroundColor: prop?.backgroundColor.toColor()

            ))
            .modifier(ModifierFactory.TintColorModifier(
                tint: prop?.tint.toColor()

            ))
            .modifier(ModifierFactory.ColorOverlayModifer(
                color: prop?.overlayColor.toColor()

            ))
            .modifier(ModifierFactory.FontWeightModifer(
                fontWeightHashValue: prop?.fontWeight

            ))
            .modifier(ModifierFactory.TitleDisplayModeModifer(
                titleDisplayModeHashValue: prop?.titleDisplayMode

            ))
            .modifier(ModifierFactory.NavigationBarHiddenModifer(
                hidden: prop?.navigationBarHidden ?? false

            ))
            .modifier(ModifierFactory.IgnoreSafeAreaModifer(
                ignore: prop?.ignoreSafeArea ?? false

            ))
            .modifier(ModifierFactory.HoverEffectModifer(
                effect: prop?.hoverEffect ?? ""

            ))
            .modifier(ModifierFactory.TextSelectionModifer(
                selectable: prop?.textSelection ?? false

            ))

            .modifier(ModifierFactory.AccessibilityModifer(
                hint: prop?.accessibilityHint,
                value: prop?.accessibilityValue,
                label: prop?.accessibilityLabel,
                identifer: prop?.accessibilityIdentifier

            ))
    }
}
