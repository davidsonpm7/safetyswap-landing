export const cardNumberMask = (value: string) =>
  value
    .replace(/\D/g, "")
    .slice(0, 16)
    .replace(/(\d{4})(?=\d)/g, "$1 ");

export const expirationDateMask = (value: string) =>
  value
    .replace(/\D/g, "")
    .slice(0, 4)
    .replace(/(\d{2})(\d)/, "$1/$2");

export const cvvMask = (value: string) => value.replace(/\D/g, "").slice(0, 4);

export const cpfMask = (value: string) =>
  value
    .replace(/\D/g, "")
    .slice(0, 11)
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");

export const dateMask = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 8);

  const day = digits.slice(0, 2);
  const month = digits.slice(2, 4);
  const year = digits.slice(4, 8);

  if (digits.length <= 2) {
    return day;
  }

  if (digits.length <= 4) {
    return `${day}/${month}`;
  }

  return `${day}/${month}/${year}`;
};

export const hourMask = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 4);

  const hour = digits.slice(0, 2);
  const minute = digits.slice(2, 4);

  if (digits.length <= 2) {
    return hour;
  }

  return `${hour}:${minute}`;
};

export const whatsappMask = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 11);

  if (digits.length <= 2) {
    return digits;
  }

  if (digits.length <= 7) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  }

  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
};

export const instagramMask = (value: string) => {
  const cleaned = value.replace(/[^a-zA-Z0-9._@]/g, "");

  return cleaned.startsWith("@") ? cleaned : `@${cleaned}`;
};

export const moneyMask = (value: string): string => {
  const digits = value.replace(/\D/g, "");

  if (!digits) {
    return "R$ 0,00";
  }

  const amountInCents = Number(digits);

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amountInCents / 100);
};
