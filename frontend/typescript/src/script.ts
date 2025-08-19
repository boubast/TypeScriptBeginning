// TypeScript Hello World
interface HelloWorldConfig {
  message: string;
  elementId: string;
}

class HelloWorld {
  private config: HelloWorldConfig;

  constructor(config: HelloWorldConfig) {
    this.config = config;
  }

  public display(): void {
    const element: HTMLElement | null = document.getElementById(
      this.config.elementId
    );
    if (element) {
      element.textContent = this.config.message;
    }
  }
}

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', (): void => {
  const helloWorld = new HelloWorld({
    message: 'Hello World from TypeScript!',
    elementId: 'hello-world',
  });
  helloWorld.display();
});
