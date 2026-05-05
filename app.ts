interface Config {
  port: number;
  host: string;
  debug: boolean;
}

const defaultConfig: Config = {
  port: 6172,
  host: 'localhost',
  debug: false,
};

export function createApp(config: Partial<Config> = {}) {
  const finalConfig = { ...defaultConfig, ...config };
  console.log(`Starting ${finalConfig.host}:${finalConfig.port}`);
  return { config: finalConfig, status: 'running' };
}
