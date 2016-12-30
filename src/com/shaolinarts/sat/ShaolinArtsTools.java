package com.shaolinarts.sat;

import android.app.Activity;
import android.content.Context;
import android.os.Build;
import android.os.Bundle;
import android.view.*;
import android.webkit.JsResult;
import android.webkit.WebChromeClient;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Toast;

public class ShaolinArtsTools extends Activity {
    private CustomWebView mWebview;
    private int pageNumber = 1;


    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {
            WebView.setWebContentsDebuggingEnabled(true);
        }

        requestWindowFeature(Window.FEATURE_NO_TITLE);
        mWebview  = new CustomWebView(this);

        mWebview.setInitialScale(1);
        mWebview.getSettings().setJavaScriptEnabled(true);
        mWebview.getSettings().setLoadWithOverviewMode(true);
        mWebview.getSettings().setUseWideViewPort(true);
        mWebview.getSettings().setMediaPlaybackRequiresUserGesture(false);
        mWebview.getSettings().setAllowFileAccessFromFileURLs(true);
        mWebview.getSettings().setAllowUniversalAccessFromFileURLs(true);


        mWebview.setWebChromeClient(new WebChromeClient() { @Override public boolean onJsAlert(WebView view, String url, String message, JsResult result) { return super.onJsAlert(view, url, message, result); } });


        mWebview.setGestureDetector(new GestureDetector(new CustomGestureDetector()));

        final Activity activity = this;

        mWebview.setWebViewClient(new WebViewClient() {
            public void onReceivedError(WebView view, int errorCode, String description, String failingUrl) {
                Toast.makeText(activity, description, Toast.LENGTH_SHORT).show();
            }
        });

        //mWebview.setPadding(0, 0, 0, 0);
       // mWebview.setInitialScale(getScale());

        mWebview.loadUrl("file:///android_asset/index.html");
        setContentView(mWebview);
    }

    private int getScale(){
        Display display = ((WindowManager) getSystemService(Context.WINDOW_SERVICE)).getDefaultDisplay();
        int width = display.getWidth();
        Double val = new Double(width)/new Double(100);
        val = val * 100d;
        return val.intValue();
    }

    private class CustomGestureDetector extends GestureDetector.SimpleOnGestureListener {
        @Override
        public boolean onFling(MotionEvent e1, MotionEvent e2, float velocityX, float velocityY) {
            boolean returnValue = false;
            if(e1 == null || e2 == null) {
                returnValue = false;
            }
            else if(e1.getPointerCount() > 1 || e2.getPointerCount() > 1) {
                returnValue = false;
            }
//            else {
//                try { // right to left swipe .. go to next page
//                    if(e1.getX() - e2.getX() > 100 && Math.abs(velocityX) > 800) {
//                        //do your stuff
//                        String asset = "file:///android_asset/"+(pageNumber+1)+".html";
//                        if (Arrays.asList(getResources().getAssets().list("")).contains((pageNumber+1)+".html")) {
//                            mWebview.loadUrl(asset);
//                            pageNumber++;
//                        }
//                        else {
//                            asset = "file:///android_asset/tail.html";
//                            mWebview.loadUrl(asset);
//                        }
//                        returnValue = true;
//                    } //left to right swipe .. go to prev page
//                    else if (e2.getX() - e1.getX() > 100 && Math.abs(velocityX) > 800) {
//                        //do your stuff
//                        if (pageNumber != 1) {
//                            if (!mWebview.getUrl().contains("tail.html")) {
//                                pageNumber--;
//                            }
//                            String asset = "file:///android_asset/"+pageNumber+".html";
//                            mWebview.loadUrl(asset);
//                        }
//                        returnValue = true;
//                    }
//                    else {
//                        returnValue = false;
//                    }
//                } catch (Exception e) { // nothing
//                    e.printStackTrace();
//                }
//            }
            return returnValue;
        }
    }

}
