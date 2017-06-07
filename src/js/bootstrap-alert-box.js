/**
 * @author        Rafi Ahmad <rafi01010010@gmail.com>
 * @package       Bootstrap Alert Box API
 * @version       V-1.0.0.1
 * @link          https://github.com/rafi01010010/bootstrap-alert-box
 * @license       http://www.opensource.org/licenses/mit-license.php MIT License
 * @description
 
 // Rafi Ahmad Dialogbox JavaScript Document.
 
 ------------------------------------------------------------------------------------------------------------------------------------
 
 1) openWaitDialog("Loading-text");
 function used for open wait dialog-box.
 
 "Loading-text" is a text to be shown in the wait dialog.
 "Loading-text" Should not be null
 
 -------------------------------------------------------------------------------------------------------------------------------------
 
 2) closeDialog();
 function used for Close the any DialogBox which is currently opened.
 
 -------------------------------------------------------------------------------------------------------------------------------------
 
 3) actionDialog(option);
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
 
 4) messageDialog(option);
 funcion used for open Message dialog box. here are options below:
 
 option{
 msg : "Text Message of Dialog",                          Mandatory option
 error : true/false  if true Error message displays.      Default value : false
 closeBtnText :  "text on close button,                   Default value : 'Close'.
 size :  'large'/'medium'/'small'                         Deafult value : 'small'
 }
 
 -------------------------------------------------------------------------------------------------------------------------------------
 
 5) confirmDialog(option);
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
 */


var dialogConfig = {
	id: 'dialog-mycodemyway',
	actionId : 'dialog-mycodemyway-action',
	yesActionId :'yes-mycodemyway-confirm',
	noActionId :'no-mycodemyway-confirm',
};
function createDialog(option) {
	if($('#'+option.id).length ==0){
		$('body').append(
	   		'<div class="modal fade" id="'+option.id+'" tabindex="-1" role="dialog" aria-hidden="true">'+
				' <div class="modal-dialog modal-sm">'+
					'<div class="modal-content">'+
						'<div class="modal-body">'+
						'</div>'+
						'<div class="modal-footer" style="padding:10px">'+
						'</div>'+
					'</div>'+
				'\</div>'+
			'\</div>'
	    );
	}else{
		$('#'+option.id).find('.modal-footer').show();
	}
}
 // Open Wait DialogBox  Start
 function openWaitDialog(loadingText){
	createDialog(dialogConfig);
	var dialogId = '#'+dialogConfig.id;
	$(dialogId).find('.modal-body').html(
			'<div class="text-center"><img class="dialog-loading-image"><p style="margin-top:10px;" class="text-primary">'+loadingText+
			'<p></div>'
	);
	$(dialogId).find('.modal-footer').hide();
	$(dialogId).modal({
		keyboard: false,
		backdrop: 'static',
		show:true
	});
 }
// Open Wait DialogBox End

// Close DialogBox  Start
 function closeDialog(){
	var dialogId = '#'+dialogConfig.id;
	$(dialogId).on('hide.bs.modal',function(){$(dialogId).remove();$('body').removeClass('modal-open');});
	$(dialogId).modal('hide');
}
// End Close DialogBox End

// Message DialogBox Start
 function messageDialog(option){
	if(option.msg == '' || option.msg == null){
		throw new  Error('Empty msg  not allowed');
	}
	createDialog(dialogConfig);
	var dialogId = '#'+dialogConfig.id;
	if(option.size=='large'){
		$(dialogId).find('.modal-dialog').removeClass("modal-sm");
	   	$(dialogId).find('.modal-dialog').addClass("modal-lg");
	}else if(option.size=='medium'){
	  	$(dialogId).find('.modal-dialog').removeClass("modal-sm");
	}
	if(option.error){
		$(dialogId).find('.modal-body').html(
			'<div class="text-danger">'+option.msg+'</div>'
		);
		if(option.closeBtnText==null){
			$(dialogId).find('.modal-footer').html(
				'<button type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button>'
			 );
		}else{
			$(dialogId).find('.modal-footer').html(
				'<button type="button" class="btn btn-danger btn-sm" data-dismiss="modal">'+option.closeBtnText+'</button>'
			 );
		}
	}else{
		$(dialogId).find('.modal-body').html(
			'<div class="text-primary">'+option.msg+'</div>'
		 );
		if(option.closeBtnText==null){
			$(dialogId).find('.modal-footer').html(
				'<button type="button" class="btn btn-default btn-sm" data-dismiss="modal">Close</button>'
			 );
		}else{
			$(dialogId).find('.modal-footer').html(
				'<button type="button" class="btn btn-default btn-sm" data-dismiss="modal">'+option.closeBtnText+'</button>'
			);
		}
    }
	$(dialogId).modal({
		keyboard: false,
		backdrop: 'static',
	});
	$(dialogId).on('hide.bs.modal',function(){$(dialogId).remove();$('body').removeClass('modal-open');});

 }
// Message DialogBox  End

// Action DialogBox Start
 function actionDialog(option){     
	if(option.msg == '' || option.msg == null){
		throw new  Error('Empty msg not allowed');
	}
	if(option.action==null){
		throw new  Error('Empty action not allowed');
	}
	createDialog(dialogConfig);
	var dialogId = '#'+dialogConfig.id;
	if(option.size=='large'){
		$(dialogId).find('.modal-dialog').addClass("modal-lg");
		$(dialogId).find('.modal-dialog').removeClass("modal-sm");
	}else if(option.size=='medium'){
	  $(dialogId).find('.modal-dialog').removeClass("modal-sm");
	}
	if(option.success){
		$(dialogId).find('.modal-body').html(
			'<p class="text-success">'+option.msg+'</p>'
		);
		if(option.actionBtnText=='' || option.actionBtnText==null){
			$(dialogId).find('.modal-footer').html(
				'<button type="button" class="btn btn-success btn-sm" id="'+dialogConfig.actionId+'">Ok</button>'
			);
		}else{
			$(dialogId).find('.modal-footer').html(
				'<button type="button" class="btn btn-success btn-sm" id="'+dialogConfig.actionId+'">'+option.actionBtnText+'</button>'
			);
		}
	}else{
		$(dialogId).find('.modal-body').html(
			'<p class="text-info">'+option.msg+'</p>'
		);
		if(option.actionBtnText=='' || option.actionBtnText==null){
			$(dialogId).find('.modal-footer').html(
				'<button type="button" class="btn btn-info btn-sm" id="'+dialogConfig.actionId+'">Ok</button>'
			);
		}else{
			$(dialogId).find('.modal-footer').html(
				'<button type="button" class="btn btn-info btn-sm" id="'+dialogConfig.actionId+'">'+option.actionBtnText+'</button>'
			);
		}

    }
	$('#'+dialogConfig.actionId).on('click',function(){
			$(dialogId).modal('hide');
			option.action();
	  });
	$(dialogId).modal({
		keyboard: false,
		backdrop: 'static'
	});
	$(dialogId).on('hide.bs.modal',function(){$(dialogId).remove();$('body').removeClass('modal-open');});
 }
// Action DialogBox End

// Confirm DialogBox Start
 function confirmDialog(option){
        
        var btnColor = 'btn-info';
        var txtColor = 'text-info';
            
        if(option.type == 'success'){
            btnColor = 'btn-success';
            txtColor = 'text-success';
        }else if(option.type == 'danger'){
            btnColor = 'btn-danger';
            txtColor = 'text-danger';
        } 
        
	var footerHtml='';
	if(option.msg == '' || option.msg == null){
		throw new  Error('Empty message not allowed');
	}
	if(option.yesAction== '' || option.yesAction == null){
		throw new  Error('Empty yesAction  not allowed');
	}
	if(option.yesBtnText=='' || option.yesBtnText == null){
		footerHtml = footerHtml + ' <button type="button" class="btn '+btnColor+' btn-sm" id="'+dialogConfig.yesActionId+'">Yes</button>';
	}else{
		footerHtml = footerHtml + '<button type="button" class="btn '+btnColor+' btn-sm" id="'+dialogConfig.yesActionId+'">'+option.yesBtnText+'</button>';
	}
	if(option.noBtnText=='' || option.noBtnText==null){
	    footerHtml = footerHtml +'<button type="button" class="btn btn-default btn-sm" id="'+dialogConfig.noActionId+'">'+
								  'No</button>';
	}else{
		footerHtml = footerHtml +	'<button type="button" class="btn btn-default btn-sm" id="'+dialogConfig.noActionId+'" >'+
		                              option.noBtnText+'</button>';
	}
	createDialog(dialogConfig);
	var dialogId = '#'+dialogConfig.id;
	if(option.size=='large'){
		$(dialogId).find('.modal-dialog').removeClass("modal-sm");
	   	$(dialogId).find('.modal-dialog').addClass("modal-lg");
	}else if(option.size=='medium'){
	  $(dialogId).find('.modal-dialog').removeClass("modal-sm");
	}
	$(dialogId).find('.modal-body').html(
		'<p class="'+txtColor+'">'+option.msg+'</p>'
	);

	$(dialogId).find('.modal-footer').html(
		 footerHtml
	);
	$('#'+dialogConfig.yesActionId).on('click',function(){
		$(dialogId).modal('hide');
		option.yesAction();
	});
    if(option.noAction!=null || option.noAction!=''){
		$('#'+dialogConfig.noActionId).on('click',function(){
		  $(dialogId).modal('hide');
		  option.noAction();
	     });
	}else{
		$(dialogId).modal('hide');
	}
	$(dialogId).modal({
		keyboard: false,
		backdrop: 'static'
	});
	$(dialogId).on('hide.bs.modal',function(){$(dialogId).remove();$('body').removeClass('modal-open');});
	}
// Confirm DialogBox End
 