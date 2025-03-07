require 'json'

package = JSON.parse(File.read(File.join(__dir__, '..', 'package.json')))

Pod::Spec.new do |s|
  s.name           = 'ReactNativeRenderSwiftUi'
  s.version        = package['version']
  s.summary        = package['description']
  s.description    = package['description']
  s.license        = package['license']
  s.author         = package['author']
  s.homepage       = package['homepage']
  s.platforms      = { :ios => '14.0', :tvos => '14.0' }
  s.swift_version  = '5.4'
  s.source         = { git: 'https://github.com/Pflaumenbaum/react-native-render-swift-ui.git', tag: package['version'] }
  s.static_framework = true

  s.dependency 'ExpoModulesCore'
  s.dependency 'Kingfisher', '~> 7.0'

  # Custom Dependencys

  # Swift/Objective-C compatibility
  s.pod_target_xcconfig = {
    'DEFINES_MODULE' => 'YES',
    'SWIFT_COMPILATION_MODE' => 'wholemodule'
  }

  s.source_files = "**/*.{h,m,swift}"
end
