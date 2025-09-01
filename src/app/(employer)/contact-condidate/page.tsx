import React, { useState } from 'react';
import Button  from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Input  from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/redix-ui-select';
import { Badge } from '@/components/ui/badge';
import { Mail, Calendar, Phone, Video, MessageSquare, Send, Star, MapPin, Briefcase } from 'lucide-react';

interface ContactCandidateDialogProps {
  candidate: {
    id: number;
    name: string;
    position: string;
    experience: string;
    rating: number;
    avatar: string;
    email?: string;
    location?: string;
    skills?: string[];
  };
  onSend: (messageData: any) => void;
  onCancel: () => void;
}

const ContactCandidateDialog: React.FC<ContactCandidateDialogProps> = ({ candidate, onSend, onCancel }) => {
  const [messageData, setMessageData] = useState({
    contactMethod: 'email',
    subject: `Regarding your application for ${candidate.position}`,
    message: `Hi ${candidate.name.split(' ')[0]},\n\nI hope this message finds you well. I reviewed your application for the ${candidate.position} position and I'm impressed with your background.\n\nI'd love to schedule a brief conversation to discuss this opportunity further. Would you be available for a 30-minute call this week?\n\nBest regards,`,
    scheduledDate: '',
    scheduledTime: '',
    priority: 'normal'
  });

  const handleInputChange = (field: string, value: string) => {
    setMessageData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSend({
      ...messageData,
      candidateId: candidate.id,
      candidateName: candidate.name,
      timestamp: new Date().toISOString()
    });
  };

  const getContactIcon = (method: string) => {
    switch (method) {
      case 'email': return <Mail className="w-4 h-4" />;
      case 'phone': return <Phone className="w-4 h-4" />;
      case 'video': return <Video className="w-4 h-4" />;
      case 'message': return <MessageSquare className="w-4 h-4" />;
      default: return <Mail className="w-4 h-4" />;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <CardTitle className="flex items-center">
            <MessageSquare className="w-5 h-5 mr-2" />
            Contact Candidate
          </CardTitle>
          <CardDescription>
            Send a message to connect with this candidate
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Candidate Info */}
          <div className="bg-accent/50 rounded-lg p-4 mb-6">
            <div className="flex items-center space-x-4">
              <img 
                src={candidate.avatar} 
                alt={candidate.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{candidate.name}</h3>
                <p className="text-sm text-muted-foreground flex items-center">
                  <Briefcase className="w-4 h-4 mr-1" />
                  {candidate.position}
                </p>
                <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                  <span className="flex items-center">
                    <Star className="w-4 h-4 mr-1 text-yellow-400 fill-current" />
                    {candidate.rating}
                  </span>
                  <span>{candidate.experience}</span>
                  {candidate.location && (
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {candidate.location}
                    </span>
                  )}
                </div>
                {candidate.skills && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {candidate.skills.slice(0, 3).map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {candidate.skills.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{candidate.skills.length - 3} more
                      </Badge>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="contactMethod">Contact Method</Label>
                <Select value={messageData.contactMethod} onValueChange={(value) => handleInputChange('contactMethod', value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="email">
                      <div className="flex items-center">
                        <Mail className="w-4 h-4 mr-2" />
                        Email
                      </div>
                    </SelectItem>
                    <SelectItem value="phone">
                      <div className="flex items-center">
                        <Phone className="w-4 h-4 mr-2" />
                        Phone Call
                      </div>
                    </SelectItem>
                    <SelectItem value="video">
                      <div className="flex items-center">
                        <Video className="w-4 h-4 mr-2" />
                        Video Call
                      </div>
                    </SelectItem>
                    <SelectItem value="message">
                      <div className="flex items-center">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Platform Message
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="priority">Priority</Label>
                <Select value={messageData.priority} onValueChange={(value) => handleInputChange('priority', value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low Priority</SelectItem>
                    <SelectItem value="normal">Normal</SelectItem>
                    <SelectItem value="high">High Priority</SelectItem>
                    <SelectItem value="urgent">Urgent</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {(messageData.contactMethod === 'phone' || messageData.contactMethod === 'video') && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-accent/30 rounded-lg">
                <div className="space-y-2">
                  <Label htmlFor="scheduledDate">Preferred Date</Label>
                  <Input
                    id="scheduledDate"
                    type="date"
                    value={messageData.scheduledDate}
                    onChange={(e) => handleInputChange('scheduledDate', e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="scheduledTime">Preferred Time</Label>
                  <Input
                    id="scheduledTime"
                    type="time"
                    value={messageData.scheduledTime}
                    onChange={(e) => handleInputChange('scheduledTime', e.target.value)}
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                value={messageData.subject}
                onChange={(e) => handleInputChange('subject', e.target.value)}
                placeholder="Email subject or call purpose"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                value={messageData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                placeholder="Write your message here..."
                rows={8}
                required
              />
              <p className="text-sm text-muted-foreground">
                Tip: Be professional, specific about the opportunity, and suggest next steps.
              </p>
            </div>

            {/* Quick Templates */}
            <div className="space-y-3">
              <Label>Quick Templates</Label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => handleInputChange('message', `Hi ${candidate.name.split(' ')[0]},\n\nThank you for your interest in the ${candidate.position} role. We'd like to schedule a brief phone screening to discuss your background and the opportunity.\n\nAre you available for a 15-minute call this week?\n\nBest regards,`)}
                >
                  Phone Screening
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => handleInputChange('message', `Hi ${candidate.name.split(' ')[0]},\n\nWe were impressed with your application for the ${candidate.position} position. We'd love to have you come in for an interview to discuss the role in more detail.\n\nWould you be available next week?\n\nBest regards,`)}
                >
                  Interview Invitation
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => handleInputChange('message', `Hi ${candidate.name.split(' ')[0]},\n\nThank you for your application to the ${candidate.position} role. While we were impressed with your background, we've decided to move forward with other candidates at this time.\n\nWe'll keep your profile on file for future opportunities.\n\nBest of luck in your job search!`)}
                >
                  Polite Rejection
                </Button>
              </div>
            </div>

            <div className="flex justify-end space-x-3 pt-6 border-t">
              <Button type="button" variant="outline" onClick={onCancel}>
                Cancel
              </Button>
              <Button type="submit" className="bg-primary hover:bg-primary/90">
                <Send className="w-4 h-4 mr-2" />
                Send {getContactIcon(messageData.contactMethod)} 
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactCandidateDialog;