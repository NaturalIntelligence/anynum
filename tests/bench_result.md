anynum benchmark — 1,000,000 iterations each

ASCII digits (fast path)                     52.9 ms  |  18.91 M ops/sec
ASCII string no digits (fast)               125.4 ms  |  7.98 M ops/sec
Devanagari 10 digits                        495.7 ms  |  2.02 M ops/sec
Arabic-Indic 10 digits                      453.0 ms  |  2.21 M ops/sec
Thai 10 digits                              471.9 ms  |  2.12 M ops/sec
Fullwidth 10 digits                         461.0 ms  |  2.17 M ops/sec
Mixed script (Hindi+ASCII)                  446.8 ms  |  2.24 M ops/sec
Math Bold surrogate pairs                   514.7 ms  |  1.94 M ops/sec
Long ASCII x100 (fast path)                5616.0 ms  |  0.18 M ops/sec
Long Devanagari x100                      43461.5 ms  |  0.02 M ops/sec
Short mixed text "कीमत: ४५"                 629.5 ms  |  1.59 M ops/sec