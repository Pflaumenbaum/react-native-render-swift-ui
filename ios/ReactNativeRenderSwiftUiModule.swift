import ExpoModulesCore

public class ReactNativeRenderSwiftUiModule: Module {
    public func definition() -> ModuleDefinition {
        Name("ReactNativeRenderSwiftUi")
        View(ReactNativeRenderSwiftUiView.self) {
            Events("onEvent")
            Prop("data") { (view, data: String) in
                view.setData(newData: data)
            }
        }
    }
}
