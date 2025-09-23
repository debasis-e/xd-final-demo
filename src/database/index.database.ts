import logger from '../logger';
const dbDetails = require('../../models/index.js');

const sequelize = dbDetails.sequelize;
const dbConnection = () => {
    sequelize.authenticate().then(() => {
        logger.info('Database is ready');
    });
};

export default dbConnection;
