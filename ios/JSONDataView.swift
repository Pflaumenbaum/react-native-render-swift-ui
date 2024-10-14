import ExpoModulesCore
import SwiftUI

public struct JSONDataView: View, JSONDataViewProtocol {
    var children: [UIView]?
    var onEvent: EventDispatcher

    public var json: Data

    public init(json: Data, children: [UIView]? = nil, onEvent: EventDispatcher) {
        self.json = json
        self.onEvent = onEvent
        self.children = children
    }

    @ViewBuilder public func toPresentable() -> some View {
        if let material = try? JSONDecoder().decode(
            ViewMaterial.self,
            from: json
        ) {
            ViewFactory(material: material, children: children, onEvent: onEvent).toPresentable()
        } else {
            ErrorMessage(message: "Mistake in JSON Sytnax")
        }
    }

    public var body: some View {
        toPresentable()
    }
}
