# 1. String Concatenation
# 2. Length of String
# 3. Accessing a Character
# 4. Accessing a Subset of Characters
# 5. Repeating Strings
# 6. Splitting Strings
# 6. Counting Strings
# 8. Replacing Strings
# 9. Finding Sub Strings
# 10. Converting Other Types into Strings
# 11. Comparing Strings
# 12. Other String Operations 

# string formatting 
format_string = 'Hello {}!'
print(format_string.format('Python'))

# string formatting
format_string = 'Hello {} {}!'
print(format_string.format('Python', 'World'))

# string formatting
name = 'Rana'
age =20
print('{} is {} years old'.format(name, age))

# string formatting
format_string = "Position: {1} {0} {2}"
print(format_string.format('A','B','C'))





import string
# string template
template = string.Template('$artist sing $song in $year')
print(template.substitute(artist='Rana', song='gaaaaaan', year=2025))
print(template.substitute(artist='Zaman', song='issong', year=2020))
d = dict(artist='Masud', song='Wow', year=2200)
print(template.substitute(d))

# $$
template = string.Template('$$artist sing $song in $year')
print(template.substitute(artist='Rana', song='gaaaaaan', year=2025))

# $$
template = string.Template('${artist} sing $song in $year')
print(template.substitute(artist='Rana', song='gaaaaaan', year=2025))