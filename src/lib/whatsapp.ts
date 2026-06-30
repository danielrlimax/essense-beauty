type CreateWhatsAppUrlParams = {
  phone: string;
  message: string;
};

type CreateBookingMessageParams = {
  businessName: string;
  serviceName?: string;
};

export function sanitizePhone(phone: string) {
  return phone.replace(/\D/g, '');
}

export function createBookingMessage({
  businessName,
  serviceName,
}: CreateBookingMessageParams) {
  if (serviceName) {
    return `Olá, vim pelo site da ${businessName} e gostaria de agendar um horário para ${serviceName}.`;
  }

  return `Olá, vim pelo site da ${businessName} e gostaria de agendar um horário.`;
}

export function createWhatsAppUrl({ phone, message }: CreateWhatsAppUrlParams) {
  const cleanPhone = sanitizePhone(phone);
  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
}