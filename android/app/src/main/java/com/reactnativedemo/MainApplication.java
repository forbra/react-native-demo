package com.reactnativedemo;

import com.reactnativenavigation.NavigationApplication;
import com.facebook.react.ReactPackage;
import com.github.wuxudong.rncharts.MPAndroidChartPackage;
import com.facebook.react.bridge.ReadableNativeArray;
import com.facebook.react.bridge.ReadableNativeMap;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication {

	@Override
	public boolean isDebug() {
		// Make sure you are using BuildConfig from your own application
		return BuildConfig.DEBUG;
	}

	protected List<ReactPackage> getPackages() {
		// Add additional packages you require here
		// No need to add RnnPackage and MainReactPackage
		return Arrays.<ReactPackage>asList(
			new MPAndroidChartPackage() 
		);
	}

	@Override
	public List<ReactPackage> createAdditionalReactPackages() {
		return getPackages();
  	}
  
  	@Override
  	public String getJSMainModuleName() {
	  	return "index";
  	}

  	@Override
  	public void onCreate() {
    	super.onCreate();
    	SoLoader.init(this, /* native exopackage */ false);
    	ReadableNativeArray.setUseNativeAccessor(true);
    	ReadableNativeMap.setUseNativeAccessor(true);
  	}

}