# Laravel Coding Standards

A Composer package for implementing Laravel Pint coding standards across Laravel packages.

## Overview

This package provides:
- A standardised `pint.json` configuration file with PSR-12 preset and custom rules
- Shell scripts to run Laravel Pint for code formatting and testing
- Automatic Laravel Pint dependency management through Composer

## Installation

### Via Composer (Recommended)

Install the package using Composer:

```bash
composer require synergitech/laravel-coding-standards --dev
```

This will automatically install Laravel Pint as a dependency and make the scripts available in your project.

### Alternative Installation Methods

1. **As a Git Submodule:**
   ```bash
   git submodule add https://github.com/SynergiTech/laravel-coding-standards.git tools/coding-standards
   ```

2. **Manual Installation:**
   Copy the files directly to your project and install Laravel Pint separately:
   ```bash
   composer require laravel/pint --dev
   ```

## Usage

### Running Pint

#### Apply Code Formatting
To automatically fix coding standard issues:
```bash
./vendor/synergitech/laravel-coding-standards/pint
```

Or if installed as submodule/manually:
```bash
./tools/coding-standards/pint
# or
./pint
```

You can pass additional arguments to customise the behaviour:
```bash
./vendor/synergitech/laravel-coding-standards/pint --verbose
./vendor/synergitech/laravel-coding-standards/pint --dry-run
./vendor/synergitech/laravel-coding-standards/pint app/Models
```

#### Test Code Standards
To check for coding standard issues without making changes:
```bash
./vendor/synergitech/laravel-coding-standards/pint-test
```

Or if installed as submodule/manually:
```bash
./tools/coding-standards/pint-test
# or
./pint-test
```

You can pass additional arguments to customise the testing:
```bash
./vendor/synergitech/laravel-coding-standards/pint-test --verbose
./vendor/synergitech/laravel-coding-standards/pint-test app/Controllers
```

### Adding Scripts to Your Composer.json

For easier access, you can add these scripts to your project's `composer.json`:

```json
{
    "scripts": {
        "pint": "./vendor/synergitech/laravel-coding-standards/pint",
        "pint:test": "./vendor/synergitech/laravel-coding-standards/pint-test"
    }
}
```

Then run:
```bash
composer run pint        # Apply formatting
composer run pint:test   # Test standards
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

## Requirements

- PHP ^8.1
- Laravel Pint ^1.0 (automatically installed with this package)

## License

This package is open-sourced software licensed under the [MIT license](LICENSE).
