# Laravel Coding Standards

A generic package for implementing Laravel Pint coding standards across Laravel packages.

## Overview

This package provides:
- A standardized `pint.json` configuration file with PSR-12 preset and custom rules
- Shell scripts to run Laravel Pint for code formatting and testing

## Usage

### Installation

1. Add this repository as a submodule or copy the files to your Laravel project
2. Ensure Laravel Pint is installed in your project:
   ```bash
   composer require laravel/pint --dev
   ```

### Running Pint

#### Apply Code Formatting
To automatically fix coding standard issues:
```bash
./pint
```

#### Test Code Standards
To check for coding standard issues without making changes:
```bash
./pint-test
```

## Configuration

The `pint.json` file includes:
- PSR-12 preset as the base standard
- Custom rules for enhanced code quality
- Exclusion of common directories (vendor, storage, bootstrap/cache)

## Custom Rules Included

- Array syntax and indentation improvements
- Multiline comment alignment
- String concatenation with single space
- Strict type comparisons
- Ordered class elements and imports
- Modern PHP syntax preferences
- And many more quality-of-life improvements

For a full list of rules, see the `pint.json` configuration file.
