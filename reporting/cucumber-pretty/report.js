$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("enter_data_table.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#DataTable will get only that value which user needs"
    }
  ],
  "line": 4,
  "name": "Enter Only One Data",
  "description": "",
  "id": "enter-only-one-data",
  "keyword": "Feature",
  "tags": [
    {
      "line": 3,
      "name": "@FunctionalTest"
    }
  ]
});
formatter.before({
  "duration": 5704373322,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Login with invalid credentials",
  "description": "",
  "id": "enter-only-one-data;login-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Enter invalid email and password from Data Table",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 9
    },
    {
      "cells": [
        "danish.bangash05@gmail.com",
        "123456"
      ],
      "line": 10
    },
    {
      "cells": [
        "hamzasohrab72@gmail.com",
        "12345"
      ],
      "line": 11
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Error message appears",
  "keyword": "Then "
});
formatter.match({
  "location": "EnterUsingDataTable.user_is_on_login_page()"
});
formatter.result({
  "duration": 1160795015,
  "status": "passed"
});
formatter.match({
  "location": "EnterUsingDataTable.enter_invalid_email_and_password_from_Data_Table(DataTable)"
});
formatter.result({
  "duration": 1776130535,
  "status": "passed"
});
formatter.match({
  "location": "EnterUsingDataTable.error_message_appear()"
});
formatter.result({
  "duration": 67192568,
  "status": "passed"
});
formatter.after({
  "duration": 274495995,
  "status": "passed"
});
formatter.uri("enter_using_scenerio_outline.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Outline will get all the values in table"
    }
  ],
  "line": 5,
  "name": "Enter All Values",
  "description": "",
  "id": "enter-all-values",
  "keyword": "Feature",
  "tags": [
    {
      "line": 4,
      "name": "@IntegrationTest"
    }
  ]
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Enter Given data",
  "description": "",
  "id": "enter-all-values;enter-given-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "User has to be on activity information page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Try entering values \"\u003cstatus\u003e\" and \"\u003cname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Values are entered without any error",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "enter-all-values;enter-given-data;",
  "rows": [
    {
      "cells": [
        "status",
        "name"
      ],
      "line": 12,
      "id": "enter-all-values;enter-given-data;;1"
    },
    {
      "cells": [
        "active",
        "admin"
      ],
      "line": 13,
      "id": "enter-all-values;enter-given-data;;2"
    },
    {
      "cells": [
        "away",
        "student1"
      ],
      "line": 14,
      "id": "enter-all-values;enter-given-data;;3"
    },
    {
      "cells": [
        "sleep",
        "student2"
      ],
      "line": 15,
      "id": "enter-all-values;enter-given-data;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2535721064,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Enter Given data",
  "description": "",
  "id": "enter-all-values;enter-given-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@IntegrationTest"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User has to be on activity information page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Try entering values \"active\" and \"admin\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Values are entered without any error",
  "keyword": "Then "
});
formatter.match({
  "location": "EnterUsingScenerioOutline.user_has_to_be_on_activity_information_page()"
});
formatter.result({
  "duration": 4683977716,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "active",
      "offset": 21
    },
    {
      "val": "admin",
      "offset": 34
    }
  ],
  "location": "EnterUsingScenerioOutline.try_entering_values_user_and_status(String,String)"
});
formatter.result({
  "duration": 1195899364,
  "status": "passed"
});
formatter.match({
  "location": "EnterUsingScenerioOutline.given_values_are_entered_without_any_error()"
});
formatter.result({
  "duration": 61833093,
  "status": "passed"
});
formatter.after({
  "duration": 203387064,
  "status": "passed"
});
formatter.before({
  "duration": 2227989601,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Enter Given data",
  "description": "",
  "id": "enter-all-values;enter-given-data;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@IntegrationTest"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User has to be on activity information page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Try entering values \"away\" and \"student1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Values are entered without any error",
  "keyword": "Then "
});
formatter.match({
  "location": "EnterUsingScenerioOutline.user_has_to_be_on_activity_information_page()"
});
formatter.result({
  "duration": 9024920196,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "away",
      "offset": 21
    },
    {
      "val": "student1",
      "offset": 32
    }
  ],
  "location": "EnterUsingScenerioOutline.try_entering_values_user_and_status(String,String)"
});
formatter.result({
  "duration": 936617748,
  "status": "passed"
});
formatter.match({
  "location": "EnterUsingScenerioOutline.given_values_are_entered_without_any_error()"
});
formatter.result({
  "duration": 69542308,
  "status": "passed"
});
formatter.after({
  "duration": 163500314,
  "status": "passed"
});
formatter.before({
  "duration": 2146016697,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Enter Given data",
  "description": "",
  "id": "enter-all-values;enter-given-data;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@IntegrationTest"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User has to be on activity information page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Try entering values \"sleep\" and \"student2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Values are entered without any error",
  "keyword": "Then "
});
formatter.match({
  "location": "EnterUsingScenerioOutline.user_has_to_be_on_activity_information_page()"
});
formatter.result({
  "duration": 2402203945,
  "error_message": "org.openqa.selenium.ElementNotVisibleException: element not interactable\n  (Session info: chrome\u003d93.0.4577.63)\n  (Driver info: chromedriver\u003d2.42.591059 (a3d9684d10d61aa0c45f6723b327283be1ebaad8),platform\u003dMac OS X 10.16.0 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 36 milliseconds\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027Danishs-MBP\u0027, ip: \u0027192.168.1.173\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dMAC, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:50640}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.42.591059 (a3d9684d10d61aa0c45f6723b327283be1ebaad8), userDataDir\u003d/var/folders/6n/jt725dcd73l_wp7s8yn03kv40000gn/T/.org.chromium.Chromium.HRje1Q}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d93.0.4577.63, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 2b6420d85c9b235e3850258ace9379eb\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:635)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:274)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\n\tat objects.ActivityPage.logIn(ActivityPage.java:33)\n\tat stepDefinitions.EnterUsingScenerioOutline.user_has_to_be_on_activity_information_page(EnterUsingScenerioOutline.java:19)\n\tat ✽.Given User has to be on activity information page(enter_using_scenerio_outline.feature:8)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "sleep",
      "offset": 21
    },
    {
      "val": "student2",
      "offset": 33
    }
  ],
  "location": "EnterUsingScenerioOutline.try_entering_values_user_and_status(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EnterUsingScenerioOutline.given_values_are_entered_without_any_error()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 332444534,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "Login feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.before({
  "duration": 2050901567,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Log in with valid credentials",
  "description": "",
  "id": "login-feature;log-in-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User need to be on the signin page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Login with valid email and password",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User shall be allowed to login no error message shown",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_need_to_be_on_the_signin_page()"
});
formatter.result({
  "duration": 914147101,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.login_with_valid_email_and_password()"
});
formatter.result({
  "duration": 2256727624,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_shall_be_allowed_to_login_no_error_message_shown()"
});
formatter.result({
  "duration": 50352095,
  "status": "passed"
});
formatter.after({
  "duration": 274106539,
  "status": "passed"
});
});