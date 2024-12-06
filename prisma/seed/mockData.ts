import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('a8a7e577-edc7-4116-a01c-1ea0899df064', '1Precious0@hotmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=3', 'inv345mno', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('a6661068-ed52-4852-a21d-4e118d675abe', '9Felicita_Reichert9@gmail.com', 'Charlie Davis', 'https://i.imgur.com/YfJQV5z.png?id=11', 'inv789ghi', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('ce01dd6c-bcef-4200-aca7-9aad7defd6f4', '17Erick73@yahoo.com', 'Alice Jones', 'https://i.imgur.com/YfJQV5z.png?id=19', 'inv345mno', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('45176e2a-e473-43b5-86cb-8306030567b8', '33Ernest.Schultz94@hotmail.com', 'Bob Brown', 'https://i.imgur.com/YfJQV5z.png?id=35', 'inv456def', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('c9d044b6-de86-4b8c-8080-1a3f8b6edb7d', '41Austin_Stoltenberg@yahoo.com', 'Bob Brown', 'https://i.imgur.com/YfJQV5z.png?id=43', 'inv123abc', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('7af2dcc5-ed6f-4803-b91e-9a4b9244081f', '49Corbin.Gerhold@yahoo.com', 'Bob Brown', 'https://i.imgur.com/YfJQV5z.png?id=51', 'inv789ghi', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('c5487976-11ed-46ff-af5f-b045e6efd6aa', '57Amparo80@gmail.com', 'Alice Jones', 'https://i.imgur.com/YfJQV5z.png?id=59', 'inv456def', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('98606478-b1e9-4a70-94ef-1a8daa43a46d', '65Esta_Mertz61@hotmail.com', 'Bob Brown', 'https://i.imgur.com/YfJQV5z.png?id=67', 'inv789ghi', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('8740bb7c-5458-4b09-8f05-687520048ae5', '73Marquis_Haley77@hotmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=75', 'inv345mno', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('3d093b4c-205b-418a-a7ed-0864132daf04', 'New features coming soon Stay tuned.', '98606478-b1e9-4a70-94ef-1a8daa43a46d');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('699056b8-5a51-4fd1-970d-35ab76fdbf8c', 'Be the first to know about our app updates.', 'a8a7e577-edc7-4116-a01c-1ea0899df064');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('628b8bd6-611f-4828-a2ec-f83887a2abab', 'New features coming soon Stay tuned.', '45176e2a-e473-43b5-86cb-8306030567b8');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('df4d68aa-efc5-4390-a5e5-a59be41b67b8', 'Get notified about the latest 3D printing trends.', '98606478-b1e9-4a70-94ef-1a8daa43a46d');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('d4e0aad1-a9dd-4ba9-a85c-3e1e8fb080ab', 'Get notified about the latest 3D printing trends.', 'a6661068-ed52-4852-a21d-4e118d675abe');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('e10c760a-989d-4b19-8f22-832831dfd9d6', 'New features coming soon Stay tuned.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('12dc8441-e2d9-4e87-94fc-9d5b312a20f9', 'Join our community of 3D printing enthusiasts.', '98606478-b1e9-4a70-94ef-1a8daa43a46d');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('ee399048-7d35-4127-87c4-ba76e85c2dde', 'Be the first to know about our app updates.', '45176e2a-e473-43b5-86cb-8306030567b8');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('197cb9b2-beba-4819-ac31-a9bd091186db', 'Get notified about the latest 3D printing trends.', '7af2dcc5-ed6f-4803-b91e-9a4b9244081f');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('35884cc2-da5f-4fb4-99be-73d37edcb2df', 'Get notified about the latest 3D printing trends.', 'ce01dd6c-bcef-4200-aca7-9aad7defd6f4');

INSERT INTO "Printer" ("id", "name", "specifications", "location", "pricePerGram", "pricePerHour", "rating", "status", "userId") VALUES ('0eb2f9c2-9547-44d5-8477-0639af890256', 'Anycubic Photon', 'SLA Resin 120x68x155mm', 'New York NY', '0.20', '7.00', '4.8', 'Available', 'c9d044b6-de86-4b8c-8080-1a3f8b6edb7d');
INSERT INTO "Printer" ("id", "name", "specifications", "location", "pricePerGram", "pricePerHour", "rating", "status", "userId") VALUES ('e3a4c137-8be0-42cd-adc5-9fc04d5b7245', 'Creality Ender 3', 'FDM PLA 140x140x140mm', 'Austin TX', '0.10', '6.00', '4.2', 'In Use', '98606478-b1e9-4a70-94ef-1a8daa43a46d');
INSERT INTO "Printer" ("id", "name", "specifications", "location", "pricePerGram", "pricePerHour", "rating", "status", "userId") VALUES ('7554359d-efd7-48e1-9117-ea232f1e1413', 'Anycubic Photon', 'FDM PLA 140x140x140mm', 'Seattle WA', '0.12', '7.00', '4.2', 'In Use', 'c5487976-11ed-46ff-af5f-b045e6efd6aa');
INSERT INTO "Printer" ("id", "name", "specifications", "location", "pricePerGram", "pricePerHour", "rating", "status", "userId") VALUES ('a0060b76-e723-431a-9d9e-210f0d196215', 'Creality Ender 3', 'SLA Resin 115x65x155mm', 'New York NY', '0.10', '5.00', '4.7', 'Available', 'ce01dd6c-bcef-4200-aca7-9aad7defd6f4');
INSERT INTO "Printer" ("id", "name", "specifications", "location", "pricePerGram", "pricePerHour", "rating", "status", "userId") VALUES ('5cc55319-40e8-40d8-a12d-e333945aeb55', 'FlashForge Finder', 'SLA Resin 115x65x155mm', 'Seattle WA', '0.10', '8.00', '4.2', 'In Use', 'c5487976-11ed-46ff-af5f-b045e6efd6aa');
INSERT INTO "Printer" ("id", "name", "specifications", "location", "pricePerGram", "pricePerHour", "rating", "status", "userId") VALUES ('a19108bf-21ce-4cd6-bf88-a78f52de5bb5', 'Creality Ender 3', 'FDM PLA 140x140x140mm', 'New York NY', '0.12', '6.00', '4.6', 'In Use', 'a6661068-ed52-4852-a21d-4e118d675abe');
INSERT INTO "Printer" ("id", "name", "specifications", "location", "pricePerGram", "pricePerHour", "rating", "status", "userId") VALUES ('ba3e9dc0-989b-4d81-a49c-04a96508d0e5', 'FlashForge Finder', 'FDM PLAABS 220x220x250mm', 'Chicago IL', '0.20', '8.00', '4.5', 'In Use', '7af2dcc5-ed6f-4803-b91e-9a4b9244081f');
INSERT INTO "Printer" ("id", "name", "specifications", "location", "pricePerGram", "pricePerHour", "rating", "status", "userId") VALUES ('1145731b-036d-472f-bdd6-167965f23955', 'Creality Ender 3', 'SLA Resin 115x65x155mm', 'New York NY', '0.15', '7.50', '4.7', 'In Use', '7af2dcc5-ed6f-4803-b91e-9a4b9244081f');
INSERT INTO "Printer" ("id", "name", "specifications", "location", "pricePerGram", "pricePerHour", "rating", "status", "userId") VALUES ('1234f9fd-1500-4b82-b1a3-3d2bc6e88788', 'Prusa i3 MK3', 'FDM PETG 250x210x210mm', 'Austin TX', '0.12', '7.50', '4.2', 'Available', '8740bb7c-5458-4b09-8f05-687520048ae5');
INSERT INTO "Printer" ("id", "name", "specifications", "location", "pricePerGram", "pricePerHour", "rating", "status", "userId") VALUES ('392a097e-6fa5-4e38-9c33-4beeaa5ba65a', 'Creality Ender 3', 'FDM PLAABS 220x220x250mm', 'Seattle WA', '0.18', '6.00', '4.2', 'Available', '45176e2a-e473-43b5-86cb-8306030567b8');

INSERT INTO "Review" ("id", "rating", "comment", "userId", "printerId") VALUES ('89430d88-7966-4656-a4a3-c74d2ba77422', 544, 'Great service highly recommended', '98606478-b1e9-4a70-94ef-1a8daa43a46d', 'e3a4c137-8be0-42cd-adc5-9fc04d5b7245');
INSERT INTO "Review" ("id", "rating", "comment", "userId", "printerId") VALUES ('ac8a8296-f944-49cc-bc2b-60ea5e653e4e', 958, 'Affordable pricing but communication could be better.', 'a8a7e577-edc7-4116-a01c-1ea0899df064', 'a19108bf-21ce-4cd6-bf88-a78f52de5bb5');
INSERT INTO "Review" ("id", "rating", "comment", "userId", "printerId") VALUES ('e1f9c9fe-0050-425a-9e6f-aca9fb410cce', 695, 'Affordable pricing but communication could be better.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'e3a4c137-8be0-42cd-adc5-9fc04d5b7245');
INSERT INTO "Review" ("id", "rating", "comment", "userId", "printerId") VALUES ('20b4f8bd-a91a-4ea8-93f8-a9373a7580ed', 373, 'Affordable pricing but communication could be better.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'a0060b76-e723-431a-9d9e-210f0d196215');
INSERT INTO "Review" ("id", "rating", "comment", "userId", "printerId") VALUES ('553e5ec3-01a4-4cf9-834f-f6e96b265954', 570, 'Not satisfied with the print had some issues.', 'ce01dd6c-bcef-4200-aca7-9aad7defd6f4', 'ba3e9dc0-989b-4d81-a49c-04a96508d0e5');
INSERT INTO "Review" ("id", "rating", "comment", "userId", "printerId") VALUES ('ac590754-efe2-4589-881b-879b47c071e3', 143, 'Excellent quality and fast turnaround time', 'a8a7e577-edc7-4116-a01c-1ea0899df064', '0eb2f9c2-9547-44d5-8477-0639af890256');
INSERT INTO "Review" ("id", "rating", "comment", "userId", "printerId") VALUES ('f739cedf-1423-4983-a7fc-a81a9893aaf0', 288, 'Great service highly recommended', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'a19108bf-21ce-4cd6-bf88-a78f52de5bb5');
INSERT INTO "Review" ("id", "rating", "comment", "userId", "printerId") VALUES ('622f6cc2-c1ed-466a-8762-b7ff78848bf4', 427, 'Excellent quality and fast turnaround time', '7af2dcc5-ed6f-4803-b91e-9a4b9244081f', '7554359d-efd7-48e1-9117-ea232f1e1413');
INSERT INTO "Review" ("id", "rating", "comment", "userId", "printerId") VALUES ('750dec34-b808-4eeb-b1f0-a7ef91c3fafc', 600, 'Not satisfied with the print had some issues.', 'c9d044b6-de86-4b8c-8080-1a3f8b6edb7d', 'e3a4c137-8be0-42cd-adc5-9fc04d5b7245');
INSERT INTO "Review" ("id", "rating", "comment", "userId", "printerId") VALUES ('766384f6-3cad-414f-b0af-9034b34a26af', 473, 'Affordable pricing but communication could be better.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '1234f9fd-1500-4b82-b1a3-3d2bc6e88788');

INSERT INTO "PrintOrder" ("id", "modelFileUrl", "specifications", "estimatedTime", "estimatedCost", "status", "deliveryAddress", "paymentStatus", "userId", "printerId") VALUES ('64fc89fa-329e-4eeb-8413-7221d0de7a52', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=211', 'PETG 0.3mm layer height 10 infill', 388, '55.00', 'Failed', '216 136 E 13th St, New York, NY 10003', 'Failed', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '1234f9fd-1500-4b82-b1a3-3d2bc6e88788');
INSERT INTO "PrintOrder" ("id", "modelFileUrl", "specifications", "estimatedTime", "estimatedCost", "status", "deliveryAddress", "paymentStatus", "userId", "printerId") VALUES ('4646d113-192a-4c6a-888f-1d1057cb1096', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=219', 'Resin 0.05mm layer height 100 infill', 870, '35.00', 'Failed', '224 330 W Broadway, New York, NY 10013', 'Paid', 'a8a7e577-edc7-4116-a01c-1ea0899df064', 'e3a4c137-8be0-42cd-adc5-9fc04d5b7245');
INSERT INTO "PrintOrder" ("id", "modelFileUrl", "specifications", "estimatedTime", "estimatedCost", "status", "deliveryAddress", "paymentStatus", "userId", "printerId") VALUES ('77244b5f-411c-48c2-a058-5e256250ed64', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=227', 'Resin 0.05mm layer height 100 infill', 944, '55.00', 'Cancelled', '232 18 W 29th St, New York, NY 10001', 'Paid', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'a0060b76-e723-431a-9d9e-210f0d196215');
INSERT INTO "PrintOrder" ("id", "modelFileUrl", "specifications", "estimatedTime", "estimatedCost", "status", "deliveryAddress", "paymentStatus", "userId", "printerId") VALUES ('10206182-2e3c-4fdb-b2b6-0b267546696f', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=235', 'Nylon 0.15mm layer height 30 infill', 16, '45.00', 'Pending', '240 42 E 20th St, New York, NY 10003', 'Refunded', '45176e2a-e473-43b5-86cb-8306030567b8', '392a097e-6fa5-4e38-9c33-4beeaa5ba65a');
INSERT INTO "PrintOrder" ("id", "modelFileUrl", "specifications", "estimatedTime", "estimatedCost", "status", "deliveryAddress", "paymentStatus", "userId", "printerId") VALUES ('6caf0128-1027-4864-b43d-4d2c4ea40a6d', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=243', 'PLA 0.2mm layer height 20 infill', 841, '45.00', 'Completed', '248 443 E 6th St, New York, NY 10009', 'Refunded', '7af2dcc5-ed6f-4803-b91e-9a4b9244081f', '5cc55319-40e8-40d8-a12d-e333945aeb55');
INSERT INTO "PrintOrder" ("id", "modelFileUrl", "specifications", "estimatedTime", "estimatedCost", "status", "deliveryAddress", "paymentStatus", "userId", "printerId") VALUES ('a0d707e4-1963-423d-aee2-a1d97dce5c56', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=251', 'PLA 0.2mm layer height 20 infill', 640, '25.00', 'In Progress', '256 136 E 13th St, New York, NY 10003', 'Failed', 'ce01dd6c-bcef-4200-aca7-9aad7defd6f4', '1145731b-036d-472f-bdd6-167965f23955');
INSERT INTO "PrintOrder" ("id", "modelFileUrl", "specifications", "estimatedTime", "estimatedCost", "status", "deliveryAddress", "paymentStatus", "userId", "printerId") VALUES ('e163f6f4-56de-469b-805a-3aceb01d3ee7', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=259', 'Nylon 0.15mm layer height 30 infill', 893, '55.00', 'Pending', '264 136 E 13th St, New York, NY 10003', 'Pending', '45176e2a-e473-43b5-86cb-8306030567b8', '392a097e-6fa5-4e38-9c33-4beeaa5ba65a');
INSERT INTO "PrintOrder" ("id", "modelFileUrl", "specifications", "estimatedTime", "estimatedCost", "status", "deliveryAddress", "paymentStatus", "userId", "printerId") VALUES ('80771425-3d5f-40b1-ba86-e72b1b8c2814', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=267', 'PLA 0.2mm layer height 20 infill', 0, '35.00', 'In Progress', '272 42 E 20th St, New York, NY 10003', 'Failed', 'a6661068-ed52-4852-a21d-4e118d675abe', '5cc55319-40e8-40d8-a12d-e333945aeb55');
INSERT INTO "PrintOrder" ("id", "modelFileUrl", "specifications", "estimatedTime", "estimatedCost", "status", "deliveryAddress", "paymentStatus", "userId", "printerId") VALUES ('d89bfb5b-df92-46f2-9305-9537ec73df9d', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=275', 'ABS 0.1mm layer height 50 infill', 583, '45.00', 'Cancelled', '280 91 Christopher St, New York, NY 10014', 'Pending', 'a6661068-ed52-4852-a21d-4e118d675abe', 'e3a4c137-8be0-42cd-adc5-9fc04d5b7245');
INSERT INTO "PrintOrder" ("id", "modelFileUrl", "specifications", "estimatedTime", "estimatedCost", "status", "deliveryAddress", "paymentStatus", "userId", "printerId") VALUES ('4e56eeed-266e-4237-9bfb-4c2d904ac186', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=283', 'PETG 0.3mm layer height 10 infill', 612, '25.00', 'Pending', '288 443 E 6th St, New York, NY 10009', 'Failed', 'a6661068-ed52-4852-a21d-4e118d675abe', 'a0060b76-e723-431a-9d9e-210f0d196215');

INSERT INTO "Message" ("id", "content", "senderId", "receiverId", "orderId") VALUES ('8ba8f655-8647-40a7-ae64-4c37a0627144', 'Can you adjust the settings for a smoother finish on my model', 'c5487976-11ed-46ff-af5f-b045e6efd6aa', '7af2dcc5-ed6f-4803-b91e-9a4b9244081f', '64fc89fa-329e-4eeb-8413-7221d0de7a52');
INSERT INTO "Message" ("id", "content", "senderId", "receiverId", "orderId") VALUES ('b6d149cd-c548-4dff-872c-efe0308e0089', 'Hi there I received the print and its perfect. Thank you', '98606478-b1e9-4a70-94ef-1a8daa43a46d', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '10206182-2e3c-4fdb-b2b6-0b267546696f');
INSERT INTO "Message" ("id", "content", "senderId", "receiverId", "orderId") VALUES ('63218306-803b-4638-bda3-6db37cd2bfd2', 'Hey I just uploaded my design. Can you let me know when you can start printing', '7af2dcc5-ed6f-4803-b91e-9a4b9244081f', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '6caf0128-1027-4864-b43d-4d2c4ea40a6d');
INSERT INTO "Message" ("id", "content", "senderId", "receiverId", "orderId") VALUES ('de41f897-34cb-4ae7-9414-167679cd81fd', 'Im interested in printing a large batch. Do you offer any discounts', 'c5487976-11ed-46ff-af5f-b045e6efd6aa', 'c9d044b6-de86-4b8c-8080-1a3f8b6edb7d', '64fc89fa-329e-4eeb-8413-7221d0de7a52');
INSERT INTO "Message" ("id", "content", "senderId", "receiverId", "orderId") VALUES ('07ae58a7-226e-4683-aaf4-ece6cef74e6c', 'Can you adjust the settings for a smoother finish on my model', '8740bb7c-5458-4b09-8f05-687520048ae5', 'c5487976-11ed-46ff-af5f-b045e6efd6aa', '77244b5f-411c-48c2-a058-5e256250ed64');
INSERT INTO "Message" ("id", "content", "senderId", "receiverId", "orderId") VALUES ('af087aac-88c6-47f4-bb1c-7c83723fb240', 'Hey I just uploaded my design. Can you let me know when you can start printing', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'a6661068-ed52-4852-a21d-4e118d675abe', 'a0d707e4-1963-423d-aee2-a1d97dce5c56');
INSERT INTO "Message" ("id", "content", "senderId", "receiverId", "orderId") VALUES ('38d955b0-b39a-4ab1-8ba6-fd26f2402c6e', 'Can you adjust the settings for a smoother finish on my model', 'ce01dd6c-bcef-4200-aca7-9aad7defd6f4', 'ce01dd6c-bcef-4200-aca7-9aad7defd6f4', 'd89bfb5b-df92-46f2-9305-9537ec73df9d');
INSERT INTO "Message" ("id", "content", "senderId", "receiverId", "orderId") VALUES ('e76f8ad6-4cae-4fcd-82bd-0d1cd2eb9408', 'Im interested in printing a large batch. Do you offer any discounts', 'c9d044b6-de86-4b8c-8080-1a3f8b6edb7d', '98606478-b1e9-4a70-94ef-1a8daa43a46d', '77244b5f-411c-48c2-a058-5e256250ed64');
INSERT INTO "Message" ("id", "content", "senderId", "receiverId", "orderId") VALUES ('4f94bbb3-22fb-4913-8f35-946c9df525f7', 'Hi there I received the print and its perfect. Thank you', 'c9d044b6-de86-4b8c-8080-1a3f8b6edb7d', '98606478-b1e9-4a70-94ef-1a8daa43a46d', '10206182-2e3c-4fdb-b2b6-0b267546696f');
INSERT INTO "Message" ("id", "content", "senderId", "receiverId", "orderId") VALUES ('13ff379c-d4b2-417a-a00f-01b76ef4f401', 'The print quality was great but it arrived a day late. Can you check on that', 'a6661068-ed52-4852-a21d-4e118d675abe', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'a0d707e4-1963-423d-aee2-a1d97dce5c56');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
