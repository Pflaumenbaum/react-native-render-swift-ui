import ExpoModulesCore
import SwiftUI

class ReactNativeRenderSwiftUiView: ExpoView {
    // passed parameters from React Native
    var data: String = ""
    var children: [UIView]? = nil
    let onEvent = EventDispatcher()

    let hostingController: UIHostingController<JSONDataView>

    required init(appContext: AppContext? = nil) {
        let jsonDataView = JSONDataView(json: Data(data.utf8), children: children, onEvent: onEvent)
        hostingController = UIHostingController(rootView: jsonDataView)

        super.init(appContext: appContext)

        clipsToBounds = true
        addSubview(hostingController.view)
        children = reactSubviews()
    }

    override func layoutSubviews() {
        hostingController.view.frame = bounds
    }

    override func didUpdateReactSubviews() {
        let subChildren = reactSubviews()
        hostingController.rootView = JSONDataView(json: Data(data.utf8), children: subChildren, onEvent: onEvent)
    }

    func setData(newData: String) {
        data = newData
        let subChildren = reactSubviews()
        hostingController.rootView = JSONDataView(json: Data(data.utf8), children: subChildren, onEvent: onEvent)
    }
}
