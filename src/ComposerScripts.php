<?php

namespace SynergiTech\LaravelCodingStandards;

use Composer\Script\Event;

class ComposerScripts
{
    public static function postInstall(Event $event): void
    {
        static::publishGuidelines($event);
    }

    public static function postUpdate(Event $event): void
    {
        static::publishGuidelines($event);
    }

    protected static function publishGuidelines(Event $event): void
    {
        $vendorDir = $event->getComposer()->getConfig()->get('vendor-dir');
        $packageDir = $vendorDir . '/synergitech/laravel-coding-standards';

        $stubsDir = $packageDir . '/stubs/guidelines';
        $targetDir = dirname($vendorDir) . '/.ai/guidelines';

        if (! is_dir($stubsDir)) {
            return;
        }

        static::copyDirectory($stubsDir, $targetDir);

        $event->getIO()->write('<info>Published AI guidelines to .ai/guidelines/</info>');
    }

    protected static function copyDirectory(string $source, string $destination): void
    {
        $iterator = new \RecursiveIteratorIterator(
            new \RecursiveDirectoryIterator($source, \RecursiveDirectoryIterator::SKIP_DOTS),
            \RecursiveIteratorIterator::SELF_FIRST
        );

        foreach ($iterator as $item) {
            $targetPath = $destination . '/' . $iterator->getSubPathname();

            if ($item->isDir()) {
                if (! is_dir($targetPath)) {
                    mkdir($targetPath, 0755, true);
                }
            } else {
                $targetDir = dirname($targetPath);
                if (! is_dir($targetDir)) {
                    mkdir($targetDir, 0755, true);
                }

                copy($item->getPathname(), $targetPath);
            }
        }
    }
}
