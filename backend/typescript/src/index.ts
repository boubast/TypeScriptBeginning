#!/usr/bin/env node

/**
 * TypeScript CLI Hello World Application
 */

import chalk from 'chalk';
import figlet from 'figlet';

interface SystemInfo {
  nodeVersion: string;
  platform: string;
  architecture: string;
}

interface HelloWorldConfig {
  message: string;
  showSystemInfo: boolean;
}

class HelloWorldCLI {
  private config: HelloWorldConfig;

  constructor(config: HelloWorldConfig) {
    this.config = config;
  }

  private displayBanner(): void {
    const banner = figlet.textSync('TS CLI', {
      font: 'Standard',
      horizontalLayout: 'default',
      verticalLayout: 'default',
    });
    console.log(chalk.blue(banner));
  }

  private getSystemInfo(): SystemInfo {
    return {
      nodeVersion: process.version,
      platform: process.platform,
      architecture: process.arch,
    };
  }

  private displaySystemInfo(systemInfo: SystemInfo): void {
    console.log(
      chalk.yellow('📦 Running on Node.js version:'),
      systemInfo.nodeVersion
    );
    console.log(chalk.cyan('⚡ Platform:'), systemInfo.platform);
    console.log(chalk.magenta('💻 Architecture:'), systemInfo.architecture);
  }

  public run(): void {
    console.clear();
    this.displayBanner();
    console.log('\n');

    console.log(chalk.green.bold(`🚀 ${this.config.message}`));

    if (this.config.showSystemInfo) {
      const systemInfo = this.getSystemInfo();
      this.displaySystemInfo(systemInfo);
    }

    console.log('\n');
    console.log(chalk.gray('Press Ctrl+C to exit'));
  }
}

function main(): void {
  const cli = new HelloWorldCLI({
    message: 'Hello World from TypeScript CLI!',
    showSystemInfo: true,
  });

  cli.run();
}

// Handle graceful shutdown
process.on('SIGINT', (): void => {
  console.log(chalk.red('\n👋 Goodbye from TypeScript CLI!'));
  process.exit(0);
});

// Run the application
main();
