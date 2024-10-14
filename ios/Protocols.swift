import ExpoModulesCore
import Foundation
import SwiftUI

protocol JSONDataViewProtocol: PresentableProtocol {
    var json: Data { get }
    var onEvent: EventDispatcher { get }
    var children: [UIView]? { get }
    init(json: Data, children: [UIView]?, onEvent: EventDispatcher)
}

protocol PresentableProtocol {
    associatedtype Content: View

    func toPresentable() -> Content
}
