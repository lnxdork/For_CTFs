#######################
# Python Not a File
# not.py
# Jan 2018
# Use: ./not.py file1 outputFile
# Example: ./not.py a.txt result.txt
#######################
 
import sys
 
# Read two files as byte arrays
file1_b = bytearray(open(sys.argv[1], 'rb').read())
 
# Set the length to be the smaller one
size = len(file1_b)
not_byte_array = bytearray(size)
 
# NAND between the files
for i in range(size):
	#print(file1_b[i])
        if file1_b[i] == 49:
		not_byte_array[i] = 48
        elif file1_b[i] == 48:
		not_byte_array[i] = 49
        elif file1_b[i] == 10:
		#print(file1_b[i])
		not_byte_array[i] = 10
	else:
		print(file1_b[i])
		print("Error")
		continue
# Write the nand bytes to the output file	
open(sys.argv[2], 'wb').write(not_byte_array)
 
print "[*] NOT %s\n[*] Saved to \033[1;33m%s\033[1;m."%(sys.argv[1], sys.argv[2])
