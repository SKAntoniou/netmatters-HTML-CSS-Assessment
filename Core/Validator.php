<?php

namespace Core;

class Validator
{
  /**
   * Test string length.
   */
  public static function string(string $value, $min = 1 , $max = INF): bool
  {
    $value = trim($value);
    return strlen($value) >= $min && strlen($value) <= $max;
  }

  /**
   * Test email against PHP filter.
   */
  public static function email(string $value): bool
  {
    return filter_var($value, FILTER_VALIDATE_EMAIL);
  }

  /** 
   * Checks for basic UK phone number check.
   */
  public static function ukphone(string $value): bool
  {
    return filter_var($value, FILTER_VALIDATE_REGEXP, ["options" => ["regexp" => "/^0[0-9]{10}$/"]]);
  }
}