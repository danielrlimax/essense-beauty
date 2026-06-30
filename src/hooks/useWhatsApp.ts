import { siteData } from '../data/siteData';
import { createBookingMessage, createWhatsAppUrl } from '../lib/whatsapp';

export function useWhatsApp() {
  function getBookingUrl() {
    const message = createBookingMessage({
      businessName: siteData.name,
    });

    return createWhatsAppUrl({
      phone: siteData.whatsapp,
      message,
    });
  }

  function getServiceBookingUrl(serviceName: string) {
    const message = createBookingMessage({
      businessName: siteData.name,
      serviceName,
    });

    return createWhatsAppUrl({
      phone: siteData.whatsapp,
      message,
    });
  }

  return {
    getBookingUrl,
    getServiceBookingUrl,
  };
}