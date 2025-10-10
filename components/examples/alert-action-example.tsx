import { Alert, AlertActions } from 'components/selia/alert';
import { Button } from 'components/selia/button';
import {
  CheckCircle2Icon,
  InfoIcon,
  TriangleAlertIcon,
  XCircleIcon,
  XIcon,
} from 'lucide-react';

export default function AlertExample() {
  return (
    <div className="w-8/12 flex flex-col gap-4">
      <Alert>
        <InfoIcon />
        Message deleted successfully.
        <AlertActions>
          <Button variant="invert" size="xs">
            Undo
          </Button>
        </AlertActions>
      </Alert>
      <Alert variant="invert">
        <InfoIcon />
        Some neutral message here.
        <AlertActions>
          <Button
            variant="ghost"
            className="not-hover:text-invert-foreground"
            size="xs-icon"
            pill
          >
            <XIcon />
          </Button>
        </AlertActions>
      </Alert>
      <Alert variant="destructive">
        <XCircleIcon />
        Payment failed. Check your card details.
        <AlertActions>
          <Button variant="ghost" size="xs" pill>
            Retry
          </Button>
        </AlertActions>
      </Alert>
      <Alert variant="info">
        <InfoIcon />
        Some useful information here.
        <AlertActions>
          <Button variant="ghost" size="xs" pill>
            Setting
          </Button>
        </AlertActions>
      </Alert>
      <Alert variant="success">
        <CheckCircle2Icon />
        Your changes have been saved successfully.
        <AlertActions>
          <Button variant="ghost" size="xs" pill>
            Refresh
          </Button>
        </AlertActions>
      </Alert>
      <Alert variant="warning">
        <TriangleAlertIcon />
        Some features may not work.
        <AlertActions>
          <Button variant="ghost" size="xs" pill>
            Fix Now
          </Button>
        </AlertActions>
      </Alert>
    </div>
  );
}
