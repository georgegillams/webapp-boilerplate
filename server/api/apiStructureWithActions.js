import originalApiStructure from 'helpers/apiStructure';

const apiStructure = JSON.parse(JSON.stringify(originalApiStructure));

// Analytics
apiStructure.createAnalytic.action = require('./actions/common/analytics/create');
apiStructure.loadAnalytics.action = require('./actions/common/analytics/loadAll');
apiStructure.loadAnalyticsSummary.action = require('./actions/common/analytics/loadSummary');

// Auth
apiStructure.loadAuth.action = require('./actions/common/auth/load');
apiStructure.logout.action = require('./actions/common/auth/logout');
apiStructure.requestVerificationEmail.action = require('./actions/common/auth/requestVerificationEmail');
apiStructure.verifyEmail.action = require('./actions/common/auth/verifyEmail');

// Emails
apiStructure.loadEmails.action = require('./actions/common/emails/loadAll');
apiStructure.resendEmail.action = require('./actions/common/emails/resend');

// login
apiStructure.loginWithMagicLink.action = require('./actions/common/magicLinks/login');
apiStructure.requestMagicLink.action = require('./actions/common/magicLinks/requestMagicLink');

// Data
apiStructure.backupAllData.action = require('./actions/common/dataManagement/backup');
apiStructure.deleteEntity.action = require('./actions/common/dataManagement/deleteEntity');
apiStructure.deleteSet.action = require('./actions/common/dataManagement/deleteSet');
apiStructure.restoreBackup.action = require('./actions/common/dataManagement/restore');

// Notifications
apiStructure.createNotification.action = require('./actions/common/notifications/create');
apiStructure.deleteNotification.action = require('./actions/common/notifications/delete');
apiStructure.loadNotifications.action = require('./actions/common/notifications/loadAll');
apiStructure.loadNotification.action = require('./actions/common/notifications/loadSingle');
apiStructure.updateNotification.action = require('./actions/common/notifications/update');

// Users
apiStructure.createUser.action = require('./actions/common/users/create');
apiStructure.deleteUser.action = require('./actions/common/users/delete');
apiStructure.loadUser.action = require('./actions/common/users/loadSingle');
apiStructure.loadUsers.action = require('./actions/common/users/load');
apiStructure.signUp.action = require('./actions/common/users/signUp');
apiStructure.updateUser.action = require('./actions/common/users/update');

export default apiStructure;
