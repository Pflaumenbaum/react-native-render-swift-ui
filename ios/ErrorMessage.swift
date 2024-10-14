//
//  ErrorMessage.swift
//  ReactNativeRenderSwiftUi
//
//  Created by Jan R. on 21.06.24.
//

import SwiftUI

struct ErrorMessage: View {
    let message: String
    var body: some View {
        #if DEBUG
            VStack {
                if #available(iOS 17.0, *) {
                    ContentUnavailableView("Error", systemImage: "xmark.octagon",
                                           description: Text(message)
                                               .foregroundColor(.red)).foregroundColor(.red)
                } else {
                    Text(message)
                        .foregroundColor(.red)
                }
            }
        #endif
    }
}
