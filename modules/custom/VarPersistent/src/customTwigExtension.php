<?php

namespace Drupal\VarPersistent;

use Drupal\Core\State\State;

/**
 * extend Drupal's Twig_Extension class
 */
class customTwigExtension extends \Twig_Extension {

    /**
     * {@inheritdoc}
     * Let Drupal know the name of your extension
     * must be unique name, string
     */
    public function getName() {
        return 'varpersistent.customtwigextension';
    }

    /**
     * {@inheritdoc}
     * Return your custom twig function to Drupal
     */
    public function getFunctions() {
        return [
            new \Twig_SimpleFunction('drupal_variable_set', [$this, 'drupal_variable_set']),
            new \Twig_SimpleFunction('drupal_variable_get', [$this, 'drupal_variable_get']),
            new \Twig_SimpleFunction('drupal_variable_delete', [$this, 'drupal_variable_delete']),
            new \Twig_SimpleFunction('drupal_get_keys', [$this, 'drupal_get_keys']),
        ];
    }

    public static function drupal_variable_set($key = '', $value = '') {

        if (!empty($key && $value)) {
            \Drupal::state()->set($key, $value);
        }
    }

    public static function drupal_variable_get($key = '') {

        if (!empty($key)) {
            return \Drupal::state()->get($key);
        }
    }

    public static function drupal_variable_delete($key = '') {

        if (!empty($key)) {
            \Drupal::state()->delete($key);
        }
    }
    
    public static function drupal_get_keys(){
        
        return \Drupal\Component\Utility\Xss::filter($_GET['keys']);
        
    }

}
