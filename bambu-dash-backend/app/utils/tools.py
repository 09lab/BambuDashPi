import hashlib

def encrypt_string(str_input):
    return hashlib.sha256(str_input.encode('utf-8').hexdigest())
