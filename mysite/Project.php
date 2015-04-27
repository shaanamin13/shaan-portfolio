<?php
class Project extends Page{
	private static $db = array(
		'Client' => 'Text',
		'Class' => 'Text'
	);
	public function getCMSFields(){

		$fields = parent::getCMSFields();


		$fields->addFieldToTab('Root.Main',new TextField('Client', 'Client'), 'Content') ;
		$fields->addFieldToTab('Root.Main',new TextField('Class', 'Class'), 'Content') ;

		return $fields;
	}
}

class Project_Controller extends Page_Controller{

}