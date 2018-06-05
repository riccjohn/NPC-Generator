# NPC-Generator

Inspired by Vornheim by Zak S. and using some of the character data from the book.

Available at:
https://www.lotfp.com/RPG/products/vornheim

---

## Usage
```
$ createCharacter(die-type to roll, type);
```
### Die
Data supports a d10 right now. Will be updated so the program knows how much data it has on it's own.

### Type
Options: 'straight' OR 'random'

'straight' uses the same roll for all 3 data types (First Name, Last Name, and Quirks).

'random' uses a new roll for all data.

## Examples
```
$ createCharacter(10, 'random');
$ createCharacter(10, 'straight');
```
