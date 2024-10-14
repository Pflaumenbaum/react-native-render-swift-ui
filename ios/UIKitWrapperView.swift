import SwiftUI

struct UIKitViewWrapper: UIViewRepresentable {
    let uiView: UIView
    func makeUIView(context _: Context) -> UIView {
        return uiView
    }

    func updateUIView(_: UIView, context _: Context) {}
}
