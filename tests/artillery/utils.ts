import {faker} from '@faker-js/faker';

export async function generateRandomEmail() {
return faker.internet.email();
}