import React from 'react';
import { ReactComponent as MessengerGradientIcon } from 'app/assets/svg/icon-messenger-gradient.svg';
import { ReactComponent as ChatbotIcon } from 'app/assets/svg/icon-chatbot.svg';
import { ReactComponent as EmailIcon } from 'app/assets/svg/icon-email.svg';
import { ReactComponent as LineIcon } from 'app/assets/svg/icon-line.svg';
import { ReactComponent as LiveChatIcon } from 'app/assets/svg/icon-live-chat.svg';
import { ReactComponent as PhoneIcon } from 'app/assets/svg/icon-phone.svg';
import { ReactComponent as WeChatIcon } from 'app/assets/svg/icon-we-chat.svg';
import { ReactComponent as WhatsAppIcon } from 'app/assets/svg/icon-whats-app.svg';
import { ReactComponent as ForesterIcon } from 'app/assets/svg/icon-forester.svg';
import { ReactComponent as QuoteOpenIcon } from 'app/assets/svg/icon-quote-open.svg';
import { ReactComponent as QuoteCloseIcon } from 'app/assets/svg/icon-quote-close.svg';
import { IconSetType } from './app-icon.component';

/*
 * Add more icon if you can
 * Rule:
 * key: ic-<svg_file cut off 'icon'>
 * value: use CamelCase
 * Example: svg file: icon-messenger => 'ic-messenger': <MessengerIcon />
 */

export const iconNames = {
  MESSENGER_GRADIENT: 'ic-messenger-gradient',
  CHATBOT: 'ic-chat-bot',
  EMAIL: 'ic-email',
  LINE: 'ic-line',
  LIVE_CHAT: 'ic-live-chat',
  PHONE: 'ic-phone',
  WE_CHAT: 'ic-we-chat',
  WHATS_APP: 'ic-whats-app',
};

const icons: IconSetType = {
  'ic-messenger-gradient': <MessengerGradientIcon />,
  'ic-chat-bot': <ChatbotIcon />,
  'ic-email': <EmailIcon />,
  'ic-line': <LineIcon />,
  'ic-live-chat': <LiveChatIcon />,
  'ic-phone': <PhoneIcon />,
  'ic-we-chat': <WeChatIcon />,
  'ic-whats-app': <WhatsAppIcon />,
  'ic-forester': <ForesterIcon />,
  'ic-quote-open': <QuoteOpenIcon />,
  'ic-quote-close': <QuoteCloseIcon />,
};

export default icons;
