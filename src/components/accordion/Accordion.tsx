import { SeasonOverview } from '@/store/types/show';
import AccordionPanel from './Accordion-Panel';
import './styles.scss';

type AccordionProps = {
  data: SeasonOverview[];
};

function Accordion(props: AccordionProps) {
  const { data } = props;

  const renderPanels = () => {
    return data.map((item: SeasonOverview, index: number) => {
      const { title, content } = item;

      return <AccordionPanel key={`accordion-panel-${index}`} title={title} content={content} />;
    });
  };

  return <div className='accordion'>{renderPanels()}</div>;
}

export default Accordion;
