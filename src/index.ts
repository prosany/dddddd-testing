import '@/app';
import { config } from '@/configs';
import logger from '@/configs/loggerConfig';
import { server } from '@/libs/initiateServer';

const serverInstance = server.listen(config.PORT, async () => {
  logger.info(`Server running on port ${config.PORT}`);
});

process.on('SIGINT', () => {
  serverInstance.close(async () => {
    logger.warn('SIGINT | Process terminated');
    process.exit(0;
  });
});

process.on('SIGTERM', () => {
  serverInstance.close(async () => {
    logger.warn('SIGTERM | Process terminated');
    process.exit(0);
  });
});
