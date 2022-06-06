/* eslint-disable react/no-danger */
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';
import React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './question.style.scss';

interface QuestionProps {
  question: string;
  answer: string;
}

function Question({ question, answer }: QuestionProps) {
  return (
    <Accordion className="question">
      <AccordionSummary
        expandIcon={<ArrowDropDownIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className="font--15md">{question}</Typography>
      </AccordionSummary>

      <AccordionDetails>
        <div
          className="font--14"
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      </AccordionDetails>
    </Accordion>
  );
}

export default React.memo(Question);
