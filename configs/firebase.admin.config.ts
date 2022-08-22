import * as admin from 'firebase-admin';
import { applicationDefault } from 'firebase-admin/app';

if (!admin.apps.length) {
	admin.initializeApp({
		credential: applicationDefault(),
	});
}

export const firebaseAdminAuth = admin.auth();

export const firebaseAdminFirestore = admin.firestore();
