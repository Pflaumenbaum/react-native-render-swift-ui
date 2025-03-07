import ExpoModulesCore
import Foundation
import SwiftUI

class Values: Codable {
    var text: String?
    var imageUrl: String?
    var systemIconName: String?
    var localImageName: String?
    var title: String?
    var placeholder: String?
    var description: String?
    var json: String?
    var index: Int?
    var key: String?
}

class ViewMaterial: Codable, Identifiable {
    var id = UUID()
    var type: ViewType?
    var values: Values?
    var properties: ViewProperties?
    var subviews: [ViewMaterial]?
    var optionalSubviews: [ViewMaterial]?

    enum CodingKeys: String, CodingKey {
        case type
        case values
        case properties
        case subviews
        case optionalSubviews
    }
}

class ViewProperties: Codable {
    var font: String? = "body"
    var fontWeight: String? = "body"

    var foregroundColor: String? = "#ffffff" // Hex
    var borderColor: String? = "#ff0000" // Hex
    var borderType: String? = "default" // Hex
    var borderWidth: Int? = 0
    var padding: Int? = 0
    var spacing: Int? = 0
    var width: Float?
    var height: Float?

    var minLength: Float? // Spacer
    /// background color of the whole view
    var backgroundColor: String? = "#ff0000" // Hex
    var overlayColor: String? = "#ff0000" // Hex
    var tint: String?

    /// leading, center, trailing
    var horizontalAlignment: String?

    /// top, bottom, center, firstTextBaseline, lastTextBaseline
    var verticalAlignment: String?

    var accessibilityHint: String?
    var accessibilityValue: String?
    var accessibilityLabel: String?
    var accessibilityIdentifier: String?

    var listStyle: String?

    /// vertical, horizontal (for ScrollView)
    var axis: String?
    var showsIndicators: Bool?

    /// navigation
    var titleDisplayMode: String? = "automatic"
    var navigationBarHidden: Bool? = false
    var ignoreSafeArea: Bool? = false

    var hoverEffect: String?
    var textSelection: Bool?
    var enableMarkdown: Bool?
    var toolbarPlacement: String?
}

// ScrollView
extension SwiftUI.Axis.Set {
    static let pick: [String: SwiftUI.Axis.Set] = [
        "vertical": .vertical,
        "horizontal": .horizontal,
    ]
}

// VStack
extension SwiftUI.HorizontalAlignment {
    static let pick: [String: SwiftUI.HorizontalAlignment] = [
        "leading": .leading,
        "center": .center,
        "trailing": .trailing,
    ]
}

// HStack
extension SwiftUI.VerticalAlignment {
    static let pick: [String: SwiftUI.VerticalAlignment] = [
        "top": .top,
        "center": .center,
        "bottom": .bottom,
        "firstTextBaseline": .firstTextBaseline,
        "lastTextBaseline": .lastTextBaseline,
    ]
}

// Font
extension SwiftUI.Font {
    static let pick: [String: Font] = [
        "largeTitle": .largeTitle,
        "title": .title,
        "headline": .headline,
        "subheadline": .subheadline,
        "body": .body,
        "callout": .callout,
        "footnote": .footnote,
        "caption": .caption,
    ]
}

extension SwiftUI.NavigationBarItem.TitleDisplayMode {
    static let pick: [String: NavigationBarItem.TitleDisplayMode] = [
        "automatic": .automatic,
        "inline": .inline,
        "large": .large,
    ]
}

// FontWeight
extension SwiftUI.Font.Weight {
    static let pick: [String: Font.Weight] = [
        "ultraLight": .ultraLight,
        "thin": .thin,
        "light": .light,
        "regular": .regular,
        "medium": .medium,
        "semibold": .semibold,
        "bold": .bold,
        "heavy": .heavy,
        "black": .black,
    ]
}

// VStack
extension SwiftUI.ToolbarItemPlacement {
    static let pick: [String: SwiftUI.ToolbarItemPlacement] = [
        "automatic": .automatic,
        "bottomBar": .bottomBar,
        "topBarLeading": .topBarLeading,
        "topBarTrailing": .topBarTrailing,
        "status": .status,
        "cancellationAction": .cancellationAction,
        "confirmationAction": .confirmationAction,
        "destructiveAction": .destructiveAction,
        "navigation": .navigation,
        "principal": .principal,
        "primary": .primaryAction,
    ]
}

extension Optional where Wrapped == Int {
    func toCGFloat() -> CGFloat? {
        guard let nonNil = self else { return nil }
        return CGFloat(nonNil)
    }
}

extension Optional where Wrapped == Float {
    func toCGFloat() -> CGFloat? {
        guard let nonNil = self else { return nil }
        return CGFloat(nonNil)
    }
}

extension Optional where Wrapped == String {
    func toColor() -> Color? {
        guard let nonNil = self else { return nil }
        return Color(hex: nonNil)
    }
}

enum ViewType: String, Codable {
    case Image
    case Text
    case LazyHStack
    case LazyVStack
    case HStack
    case VStack
    case ZStack
    case Rectangle
    case Circle
    case Ellipse
    case Spacer
    case Divider
    case List
    case ScrollView
    case ContentUnavailableView
    case NavigationLink
    case ContextMenu
    case DisclosureGroup
    case NavigationSplitView
    case Label
    case ReactChildView
    case ControlGroup
    case SheetView
    case PopoverView
    case MaskView
    case Section
    case Button
    case CustomView
    case ToolbarItemGroup
    case NavigationView
}
