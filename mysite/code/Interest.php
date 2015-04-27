<?php

class Interest extends Page {
	private static $db = array(
	
	);

	
	private static $has_one = array(
		
		'InterestImage' => 'Image'
	
	);
	

	public function getCMSFields(){
		$fields = parent::getCMSFields();
	
		$fields->addFieldToTab('Root.Main', new UploadField('InterestImage'),'Content');
		
		return $fields;
	}

}
class Interest_Controller extends Page_Controller{


}
