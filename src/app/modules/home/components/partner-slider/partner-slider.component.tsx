import React from 'react';
import viettelLogo from 'app/assets/images/partners-logo/viettel.png';
import cmcLogo from 'app/assets/images/partners-logo/cmc.png';
import aareNetLogo from 'app/assets/images/partners-logo/aare-net.png';
import dkshLogo from 'app/assets/images/partners-logo/dksh.png';
import flcLogo from 'app/assets/images/partners-logo/flc.png';
import fptLogo from 'app/assets/images/partners-logo/fpt.png';
import gadgetLogo from 'app/assets/images/partners-logo/gadget.png';
import heinekenLogo from 'app/assets/images/partners-logo/heineken.png';
import itgLogo from 'app/assets/images/partners-logo/itg.png';
import kiotVietLogo from 'app/assets/images/partners-logo/kiot-viet.png';
import lgLogo from 'app/assets/images/partners-logo/lg.png';
import manulifeLogo from 'app/assets/images/partners-logo/manulife.png';
import maxisLogo from 'app/assets/images/partners-logo/maxis.png';
import microtelLogo from 'app/assets/images/partners-logo/microtel.png';
import mobifoneLogo from 'app/assets/images/partners-logo/mobifone.png';
import vinaphoneLogo from 'app/assets/images/partners-logo/vinaphone.png';
import petrolimexLogo from 'app/assets/images/partners-logo/petrolimex.png';
import prudentialLogo from 'app/assets/images/partners-logo/prudential.png';
import southLogo from 'app/assets/images/partners-logo/south.png';
import sptLogo from 'app/assets/images/partners-logo/spt.png';
import teleproLogo from 'app/assets/images/partners-logo/telepro.png';
import vihatLogo from 'app/assets/images/partners-logo/vihat.png';
import vmgLogo from 'app/assets/images/partners-logo/vmg.png';
import vnptLogo from 'app/assets/images/partners-logo/vnpt.png';
import vnttLogo from 'app/assets/images/partners-logo/vntt.png';
import vosLogo from 'app/assets/images/partners-logo/vos.png';
import vpBankLogo from 'app/assets/images/partners-logo/vp-bank.png';
import './partner-slider.style.scss';

const LOGO = [
  viettelLogo,
  cmcLogo,
  vinaphoneLogo,
  mobifoneLogo,
  petrolimexLogo,
  prudentialLogo,
  vnptLogo,
  vnttLogo,
  vosLogo,
  vpBankLogo,
  vmgLogo,
  vihatLogo,
  teleproLogo,
  sptLogo,
  southLogo,
  maxisLogo,
  microtelLogo,
  manulifeLogo,
  lgLogo,
  kiotVietLogo,
  itgLogo,
  heinekenLogo,
  gadgetLogo,
  fptLogo,
  flcLogo,
  dkshLogo,
  aareNetLogo,
];

function PartnerSlider() {
  return (
    <section className="partners-slider">
      <div id="infinite" className="highway-slider">
        <div className="container highway-barrier">
          <ul className="highway-lane">
            {LOGO.map((item, index) => (
              <li key={index} className="highway-car">
                <img alt={item} src={item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default React.memo(PartnerSlider);
