<?php

class ExperiencePage extends Page{
	
	private static $db = array(
		'StartDate' => 'Date',
		'EndDate' => 'Date',
		'Current' => 'Boolean',
		'Company' => 'Text',
		'Location'=> 'Text'
		
		
	
		);
	private static $has_one = array(
		
			'Examples'=> 'Image'
	
		);
	public function getCMSFields(){
	$fields = parent::getCMSFields();
	//$startDateField = new DateField ('StartDate', 'Start Date');
	//$startDateField->setConfig ('showcalendar', true);
	//$startDateField->setConfig('showdropdown', true);
	//$startDateField->setConfig('dateformat', 'dd.MM.YYYY');


	//$fields->addFieldToTab('Root.Main', '$startDateField'), 'Content') ;
	$fields->addFieldToTab('Root.Main',new DateField('StartDate', 'Start Date'), 'Content') ;
	$fields->addFieldToTab('Root.Main',new DateField('EndDate', 'End Date'), 'Content') ;
	$fields->addFieldToTab('Root.Main', new CheckboxField("Current"), 'Content');
	$fields->addFieldToTab('Root.Main',new TextField('Company', 'Company'), 'Content') ;
	$fields->addFieldToTab('Root.Main',new TextField('Location', 'Location'), 'Content') ;
	$fields->addFieldToTab('Root.Main', new UploadField('Examples','Examples'),'Content');
		return $fields;
	}

}
class ExperiencePage_Controller extends Page_Controller{


}