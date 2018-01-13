#######################
# Python XOR 2 Files
# xor.py
# Jan 2018
# Use: ./xor.py file1 file2 outputFile
# Example: ./xor.py C:\a.txt C:\b.txt C:\result.txt
#######################
 
import sys
 
# Read two files as byte arrays
file1_b = bytearray(open(sys.argv[1], 'rb').read())
file2_b = bytearray(open(sys.argv[2], 'rb').read())
 
# Set the length to be the smaller one
size = len(file1_b) if file1_b < file2_b else len(file2_b)
xord_byte_array = bytearray(size)
 
# XOR between the files
for i in range(size):
	#print(file1_b[i], file2_b[i])
	if file1_b[i] == 48 and file2_b[i] == 48:
		xord_byte_array[i] = 48 #32
	elif file1_b[i] == 49 and file2_b[i] == 49:
		xord_byte_array[i] = 48 #32
	elif file1_b[i] == 48 and file2_b[i] == 49:
		xord_byte_array[i] = 49	#88
	elif file1_b[i] == 49 and file2_b[i] == 48:
		xord_byte_array[i] = 49 #88
	elif file1_b[i] == 10 and file2_b[i] == 10:
		xord_byte_array[i] = 10
	else:
		print(file1_b[i], file2_b[i])
		print("error")
		continue
 
# Write the XORd bytes to the output file	
open(sys.argv[3], 'wb').write(xord_byte_array)
 
print "[*] %s XOR %s\n[*] Saved to \033[1;33m%s\033[1;m."%(sys.argv[1], sys.argv[2], sys.argv[3])
