#!/bin/bash
python addChecksum.py < timecatcher-dev.txt > timecatcher.txt
echo `python validateChecksum.py < timecatcher.txt`