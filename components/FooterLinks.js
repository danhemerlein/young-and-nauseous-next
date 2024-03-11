import { footerLinks } from '@/public/data/footer-links'

const FooterLinks = () => {
  return (
    <div className="flex flex-col gap-y-2 font-lack">
      <div className="flex justify-between text-sm">
        <div className="flex gap-2">
          {footerLinks.map((link, index) => {
            return (
              <a
                key={index}
                href={link.href}
                className="dotted-link"
                target="_blank"
              >
                {link.dsp}
              </a>
            )
          })}
        </div>
        <div className="flex gap-2">
          <span className="">fonts:</span>
          <a
            href="https://gitlab.com/velvetyne/lack"
            className="dotted-link"
            target="_blank"
          >
            lack
          </a>
          <a
            href="https://www.fonts.com/font/itc/young-baroque"
            className="dotted-link"
            target="_blank"
          >
            young baroque
          </a>
        </div>
      </div>

      <div className="flex justify-between">
        <p className="text-sm">
          music & site by&nbsp;
          <a
            href="https://danhemerlein.com"
            className="dotted-link"
            target="_blank"
          >
            dan hemerlein
          </a>
        </p>

        <p className="text-sm">est. 2020</p>
      </div>
    </div>
  )
}

FooterLinks.propTypes = {}

export default FooterLinks
