from cryptography.fernet import fernet

#Generating key
key=fernet.generate_key()
with open('mykey.key','wb') as mykey:
   mykey.write(key)

with open('mykey.key','rb') as mykey:
    key=mykey.read()
print(key)

#Encrypting file
f=fernet(key)
with open('file_name','rb') as original_file:
   original=original_file.read()
encrypted=f.encrypt(original)
with open('encrypted_file_name','rb') as encrypted_file:
   encrypted_file.write(encrypted)

#decrypting file
f=fernet(key)
with open('encrypted_file_name','rb') as encrypted_file:
    encrypted=encrypted_file.read()
decrypt=f.decrypt(encrypted)
with open('decrypted_file_name','rb') as decrypted_file:
    decrypted_file.write(decrypt)