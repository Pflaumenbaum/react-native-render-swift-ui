import SwiftUI

extension View {
    func embedInAnyView() -> AnyView {
        AnyView(self)
    }
}
