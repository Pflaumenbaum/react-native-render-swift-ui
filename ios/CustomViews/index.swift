
import ExpoModulesCore
import SwiftUI

struct CustomView: View {
    let viewKey: String
    let material: ViewMaterial
    let onEvent: EventDispatcher
    
    @ViewBuilder
    var body: some View {
        switch viewKey {
        case ".$colorPicker": ColorView(material: material  );
case ".$textHello": TextView(  );
default:
            ErrorMessage(message: "Native View not found")
        }
    }
}

