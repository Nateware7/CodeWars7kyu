// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20
// 2742 --> 28

function century(year) {
    return Math.ceil(year / 100);
}  



function century(year) {
    if(year >= 1 && year  <= 100) {
      return 1;
    } else if(year >= 101 && year  <= 200) {
        return 2;
      } else if(year >= 201 && year  <= 300) {
        return 3
        } else if(year >= 301 && year  <= 400) {
          return 4
          } else if(year >= 401 && year  <= 500) {
            return 5
            } else if(year >= 101 && year  <= 600) {
              return 6
              } else if(year >= 201 && year  <= 700) {
                return 7
                } else if(year >= 301 && year  <= 800) {
                  return 8
                  } else if(year >= 801 && year  <= 900) {
                    return 9
                    } else if(year >= 901 && year  <= 1000) {
                      return 10
                      } else if(year >= 1001 && year  <= 1100) {
                        return 11
                        } else if(year >= 1101 && year  <= 1200) {
                          return 12
                          } else if(year >= 1201 && year  <= 1300) {
                            return 13
                            } else if(year >= 1301 && year  <= 1400) {
                              return 14
                              } else if(year >= 1401 && year  <= 1500) {
                                return 15
                                } else if(year >= 1501 && year  <= 1600) {
                                  return 16
                                  } else if(year >= 1601 && year  <= 1700) {
                                    return 17
                                    } else if(year >= 1701 && year  <= 1800) {
                                      return 18
                                      } else if(year >= 1801 && year  <= 1900) {
                                        return 19
                                        } else if(year >= 1901 && year  <= 2000) {
                                          return 20
                                          } else if(year >= 2001 && year  <= 2100) {
                                            return 21
                                            } else if(year >= 2101 && year <= 2200) {
                                              return 22
                                              } if(year >= 2201 && year  <= 2300) {
      return 23;
    } else if(year >= 2301 && year  <= 2400) {
        return 24;
      } else if(year >= 2401 && year  <= 2500) {
        return 25
        } else if(year >= 2501 && year  <= 2600) {
          return 26
          } else if(year >= 2601 && year  <= 2700) {
            return 27
            } else if(year >= 2701 && year  <= 2800) {
              return 28
              } else if(year >= 2801 && year  <= 2900) {
                return 29
                } else if(year >= 2901 && year  <= 3000) {
                  return 30
                  } else if(year >= 3001 && year  <= 3100) {
                    return 31
                    } else if(year >= 3101 && year  <= 3200) {
                      return 32
                      } else if(year >= 3201 && year  <= 3300) {
                        return 33
                        } else if(year >= 3301 && year  <= 3400) {
                          return 34
                          } else if(year >= 3401 && year  <= 3500) {
                            return 35
                            } else if(year >= 3501 && year  <= 3600) {
                              return 36
                              } else if(year >= 3601 && year  <= 3700) {
                                return 37
                                } else if(year >= 3701 && year  <= 3800) {
                                  return 38
                                  } else if(year >= 3801 && year  <= 3900) {
                                    return 39
                                    } else if(year >= 3901 && year  <= 4000) {
                                      return 40
                                      } else if(year >= 4001 && year  <= 4100) {
                                        return 41
                                        } else if(year >= 4101 && year  <= 4200) {
                                          return 42
                                          } else if(year >= 4201 && year  <= 4300) {
                                            return 43
                                            } if(year >= 4301 && year  <= 4400) {
      return 44;
    } else if(year >= 4401 && year  <= 4500) {
        return 45;
      } else if(year >= 4501 && year  <= 4600) {
        return 46
        } else if(year >= 4601 && year  <= 4700) {
          return 47
          } else if(year >= 4701 && year  <= 4800) {
            return 48
            } else if(year >= 4801 && year  <= 4900) {
              return 49
              } else if(year >= 4901 && year  <= 5000) {
                return 50
                } else if(year >= 5001 && year  <= 5100) {
                  return 51
                  } else if(year >= 5101 && year  <= 5200) {
                    return 52
                    } else if(year >= 5201 && year  <= 5300) {
                      return 53
                      } else if(year >= 5301 && year  <= 5400) {
                        return 54
                        } else if(year >= 5401 && year  <= 5500) {
                          return 55
                          } else if(year >= 5501 && year  <= 5600) {
                            return 56
                            } else if(year >= 5601 && year  <= 5700) {
                              return 57
                              } else if(year >= 5701 && year  <= 5800) {
                                return 58
                                } else if(year >= 5801 && year  <= 5900) {
                                  return 59
                                  } else if(year >= 5901 && year  <= 6000) {
                                    return 60
                                    } else if(year >= 6001 && year  <= 6100) {
                                      return 61
                                      } else if(year >= 6101 && year  <= 6200) {
                                        return 62
                                        } else if(year >= 6201 && year  <= 6300) {
                                          return 63
                                          } else if(year >= 6301 && year  <= 6400) {
                                            return 64
                                            } else if(year >= 6401 && year  <= 6500) {
        return 65;
      } else if(year >= 6501 && year  <= 6600) {
        return 66
        } else if(year >= 6601 && year  <= 6700) {
          return 67
          } else if(year >= 6701 && year  <= 6800) {
            return 68
            } else if(year >= 6801 && year  <= 6900) {
              return 69
              } else if(year >= 6901 && year  <= 7000) {
                return 70
                } else if(year >= 7001 && year  <= 7100) {
                  return 71
                  } else if(year >= 7101 && year  <= 7200) {
                    return 72
                    } else if(year >= 7201 && year  <= 7300) {
                      return 73
                      } else if(year >= 7301 && year  <= 7400) {
                        return 74
                        } else if(year >= 7401 && year  <= 7500) {
                          return 75
                          } else if(year >= 7501 && year  <= 7600) {
                            return 76
                            } else if(year >= 7601 && year  <= 7700) {
                              return 77
                              } else if(year >= 7701 && year  <= 7800) {
                                return 78
                                } else if(year >= 7801 && year  <= 7900) {
                                  return 79
                                  } else if(year >= 7901 && year  <= 8000) {
                                    return 80
                                    } else if(year >= 8001 && year  <= 8100) {
                                      return 81
                                      } else if(year >= 8101 && year  <= 8200) {
                                        return 82
                                        } else if(year >= 8201 && year  <= 8300) {
                                          return 83
                                          } else if(year >= 8301 && year  <= 8400) {
                                            return 84
                                            } else if(year >= 8401 && year  <= 8500) {
        return 85;
      } else if(year >= 8501 && year  <= 8600) {
        return 86
        } else if(year >= 8601 && year  <= 8700) {
          return 87
          } else if(year >= 8701 && year  <= 8800) {
            return 88
            } else if(year >= 8801 && year  <= 8900) {
              return 89
              } else if(year >= 8901 && year  <= 9000) {
                return 90
                } else if(year >= 9001 && year  <= 9100) {
                  return 91
                  } else if(year >= 9101 && year  <= 9200) {
                    return 92
                    } else if(year >= 9201 && year  <= 9300) {
                      return 93
                      } else if(year >= 9301 && year  <= 9400) {
                        return 94
                        } else if(year >= 9401 && year  <= 9500) {
                          return 95
                          } else if(year >= 9501 && year  <= 9600) {
                            return 96
                            } else if(year >= 9601 && year  <= 9700) {
                              return 97
                              } else if(year >= 9701 && year  <= 9800) {
                                return 98
                                } else if(year >= 9801 && year <= 9900) {
                                  return 99
                                  } else {
                                    return 100
                                    }
  }function century(year) {
  if(year >= 1 && year  <= 100) {
    return 1;
  } else if(year >= 101 && year  <= 200) {
      return 2;
    } else if(year >= 201 && year  <= 300) {
      return 3
      } else if(year >= 301 && year  <= 400) {
        return 4
        } else if(year >= 401 && year  <= 500) {
          return 5
          } else if(year >= 101 && year  <= 600) {
            return 6
            } else if(year >= 201 && year  <= 700) {
              return 7
              } else if(year >= 301 && year  <= 800) {
                return 8
                } else if(year >= 801 && year  <= 900) {
                  return 9
                  } else if(year >= 901 && year  <= 1000) {
                    return 10
                    } else if(year >= 1001 && year  <= 1100) {
                      return 11
                      } else if(year >= 1101 && year  <= 1200) {
                        return 12
                        } else if(year >= 1201 && year  <= 1300) {
                          return 13
                          } else if(year >= 1301 && year  <= 1400) {
                            return 14
                            } else if(year >= 1401 && year  <= 1500) {
                              return 15
                              } else if(year >= 1501 && year  <= 1600) {
                                return 16
                                } else if(year >= 1601 && year  <= 1700) {
                                  return 17
                                  } else if(year >= 1701 && year  <= 1800) {
                                    return 18
                                    } else if(year >= 1801 && year  <= 1900) {
                                      return 19
                                      } else if(year >= 1901 && year  <= 2000) {
                                        return 20
                                        } else if(year >= 2001 && year  <= 2100) {
                                          return 21
                                          } else if(year >= 2101 && year <= 2200) {
                                            return 22
                                            } if(year >= 2201 && year  <= 2300) {
    return 23;
  } else if(year >= 2301 && year  <= 2400) {
      return 24;
    } else if(year >= 2401 && year  <= 2500) {
      return 25
      } else if(year >= 2501 && year  <= 2600) {
        return 26
        } else if(year >= 2601 && year  <= 2700) {
          return 27
          } else if(year >= 2701 && year  <= 2800) {
            return 28
            } else if(year >= 2801 && year  <= 2900) {
              return 29
              } else if(year >= 2901 && year  <= 3000) {
                return 30
                } else if(year >= 3001 && year  <= 3100) {
                  return 31
                  } else if(year >= 3101 && year  <= 3200) {
                    return 32
                    } else if(year >= 3201 && year  <= 3300) {
                      return 33
                      } else if(year >= 3301 && year  <= 3400) {
                        return 34
                        } else if(year >= 3401 && year  <= 3500) {
                          return 35
                          } else if(year >= 3501 && year  <= 3600) {
                            return 36
                            } else if(year >= 3601 && year  <= 3700) {
                              return 37
                              } else if(year >= 3701 && year  <= 3800) {
                                return 38
                                } else if(year >= 3801 && year  <= 3900) {
                                  return 39
                                  } else if(year >= 3901 && year  <= 4000) {
                                    return 40
                                    } else if(year >= 4001 && year  <= 4100) {
                                      return 41
                                      } else if(year >= 4101 && year  <= 4200) {
                                        return 42
                                        } else if(year >= 4201 && year  <= 4300) {
                                          return 43
                                          } if(year >= 4301 && year  <= 4400) {
    return 44;
  } else if(year >= 4401 && year  <= 4500) {
      return 45;
    } else if(year >= 4501 && year  <= 4600) {
      return 46
      } else if(year >= 4601 && year  <= 4700) {
        return 47
        } else if(year >= 4701 && year  <= 4800) {
          return 48
          } else if(year >= 4801 && year  <= 4900) {
            return 49
            } else if(year >= 4901 && year  <= 5000) {
              return 50
              } else if(year >= 5001 && year  <= 5100) {
                return 51
                } else if(year >= 5101 && year  <= 5200) {
                  return 52
                  } else if(year >= 5201 && year  <= 5300) {
                    return 53
                    } else if(year >= 5301 && year  <= 5400) {
                      return 54
                      } else if(year >= 5401 && year  <= 5500) {
                        return 55
                        } else if(year >= 5501 && year  <= 5600) {
                          return 56
                          } else if(year >= 5601 && year  <= 5700) {
                            return 57
                            } else if(year >= 5701 && year  <= 5800) {
                              return 58
                              } else if(year >= 5801 && year  <= 5900) {
                                return 59
                                } else if(year >= 5901 && year  <= 6000) {
                                  return 60
                                  } else if(year >= 6001 && year  <= 6100) {
                                    return 61
                                    } else if(year >= 6101 && year  <= 6200) {
                                      return 62
                                      } else if(year >= 6201 && year  <= 6300) {
                                        return 63
                                        } else if(year >= 6301 && year  <= 6400) {
                                          return 64
                                          } else if(year >= 6401 && year  <= 6500) {
      return 65;
    } else if(year >= 6501 && year  <= 6600) {
      return 66
      } else if(year >= 6601 && year  <= 6700) {
        return 67
        } else if(year >= 6701 && year  <= 6800) {
          return 68
          } else if(year >= 6801 && year  <= 6900) {
            return 69
            } else if(year >= 6901 && year  <= 7000) {
              return 70
              } else if(year >= 7001 && year  <= 7100) {
                return 71
                } else if(year >= 7101 && year  <= 7200) {
                  return 72
                  } else if(year >= 7201 && year  <= 7300) {
                    return 73
                    } else if(year >= 7301 && year  <= 7400) {
                      return 74
                      } else if(year >= 7401 && year  <= 7500) {
                        return 75
                        } else if(year >= 7501 && year  <= 7600) {
                          return 76
                          } else if(year >= 7601 && year  <= 7700) {
                            return 77
                            } else if(year >= 7701 && year  <= 7800) {
                              return 78
                              } else if(year >= 7801 && year  <= 7900) {
                                return 79
                                } else if(year >= 7901 && year  <= 8000) {
                                  return 80
                                  } else if(year >= 8001 && year  <= 8100) {
                                    return 81
                                    } else if(year >= 8101 && year  <= 8200) {
                                      return 82
                                      } else if(year >= 8201 && year  <= 8300) {
                                        return 83
                                        } else if(year >= 8301 && year  <= 8400) {
                                          return 84
                                          } else if(year >= 8401 && year  <= 8500) {
      return 85;
    } else if(year >= 8501 && year  <= 8600) {
      return 86
      } else if(year >= 8601 && year  <= 8700) {
        return 87
        } else if(year >= 8701 && year  <= 8800) {
          return 88
          } else if(year >= 8801 && year  <= 8900) {
            return 89
            } else if(year >= 8901 && year  <= 9000) {
              return 90
              } else if(year >= 9001 && year  <= 9100) {
                return 91
                } else if(year >= 9101 && year  <= 9200) {
                  return 92
                  } else if(year >= 9201 && year  <= 9300) {
                    return 93
                    } else if(year >= 9301 && year  <= 9400) {
                      return 94
                      } else if(year >= 9401 && year  <= 9500) {
                        return 95
                        } else if(year >= 9501 && year  <= 9600) {
                          return 96
                          } else if(year >= 9601 && year  <= 9700) {
                            return 97
                            } else if(year >= 9701 && year  <= 9800) {
                              return 98
                              } else if(year >= 9801 && year <= 9900) {
                                return 99
                                } else {
                                  return 100
                                  }
}