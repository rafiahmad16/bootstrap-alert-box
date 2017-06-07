# Rafi Ahmad bootstrap-alert-box JavaScript Document.
 
 ------------------------------------------------------------------------------------------------------------------------------------
 
 #1) openWaitDialog("Loading-text");
 function used for open wait dialog-box.
 
 "Loading-text" is a text to be shown in the wait dialog.
 "Loading-text" Should not be null
 
 -------------------------------------------------------------------------------------------------------------------------------------
 
 #2) closeDialog();
 function used for Close the any DialogBox which is currently opened.
 
 -------------------------------------------------------------------------------------------------------------------------------------
 
 #3) actionDialog(option);
 funcion used for open action dialog box .
 option for action dialog box :
 
 option{        
 msg : "Text message of action",                                    Mandatory option
 action :  "pass function name to perform action",                  Mandatory option
 success : true/false.  if ture dialog is success action dialog     Default value : false
 actionBtnText :  "Text on action button",                          Default value : 'Ok'
 size :   large/medium/small  Deafult is small,                     Default value : 'small'
 }
 
 -------------------------------------------------------------------------------------------------------------------------------------
 
 #4) messageDialog(option);
 funcion used for open Message dialog box. here are options below:
 
 option{
 msg : "Text Message of Dialog",                          Mandatory option
 error : true/false  if true Error message displays.      Default value : false
 closeBtnText :  "text on close button,                   Default value : 'Close'.
 size :  'large'/'medium'/'small'                         Deafult value : 'small'
 }
 
 -------------------------------------------------------------------------------------------------------------------------------------
 
 #5) confirmDialog(option);
 funcion used for open Confirm dialog box have Buttons Yes or No. here are options below :
 
 option{
 msg : "Text Message on confirm-Dialog",                         Mandatory option
 yesAction :  "function name to perform action on YES button",   Mandatory option
 yesBtnText :  "Text on Yes button",                             Default value  : 'Yes'
 noBtnText :  "text on No button.                                Default value  : 'No'
 noAction :  "function name to Perform action on NO button"      Default Action : Hide Confim-Dialog.
 size :   'large'/'medium'/'small'                               Default value  : 'small'
 type :   'info'/'success'/'danger'                              Default value  : 'info'
 }
 
 --------------------------------------------------------------------------------------------------------------------------------------
 