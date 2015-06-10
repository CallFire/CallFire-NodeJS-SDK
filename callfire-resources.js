    proto.client.Broadcast = require('./Client/Broadcast');
    proto.client.Call = require('./Client/Call');
    proto.client.Ccc = require('./Client/Ccc');
    proto.client.Contact = require('./Client/Contact');
    proto.client.Label = require('./Client/Label');
    proto.client.Number = require('./Client/Number');
    proto.client.Subscription = require('./Client/Subscription');
    proto.client.Text = require('./Client/Text');

    proto.resource.Action = require('./Resource/Action');
    proto.resource.ActionRecord = require('./Resource/ActionRecord');
    proto.resource.ActionStatistics = require('./Resource/ActionStatistics');
    proto.resource.Agent = require('./Resource/Agent');
    proto.resource.AgentGroup = require('./Resource/AgentGroup');
    proto.resource.AgentSession = require('./Resource/AgentSession');
    proto.resource.AutoReply = require('./Resource/AutoReply');
    proto.resource.Broadcast = require('./Resource/Broadcast');
    proto.resource.BroadcastConfig = require('./Resource/BroadcastConfig');
    proto.resource.BroadcastSchedule = require('./Resource/BroadcastSchedule');
    proto.resource.BroadcastStats = require('./Resource/BroadcastStats');
    proto.resource.Call = require('./Resource/Call');
    proto.resource.CallRecord = require('./Resource/CallRecord');
    proto.resource.CallTrackingConfig = require('./Resource/CallTrackingConfig');
    proto.resource.Callback = require('./Resource/Callback');
    proto.resource.CccBroadcastConfig = require('./Resource/CccBroadcastConfig');
    proto.resource.CccCampaign = require('./Resource/CccCampaign');
    proto.resource.CccCampaignStats = require('./Resource/CccCampaignStats');
    proto.resource.CccQuestion = require('./Resource/CccQuestion');
    proto.resource.CccScript = require('./Resource/CccScript');
    proto.resource.Contact = require('./Resource/Contact');
    proto.resource.ContactBatch = require('./Resource/ContactBatch');
    proto.resource.ContactHistory = require('./Resource/ContactHistory');
    proto.resource.ContactList = require('./Resource/ContactList');
    proto.resource.DaysOfWeek = require('./Resource/DaysOfWeek');
    proto.resource.DncList = require('./Resource/DncList');
    proto.resource.DncNumber = require('./Resource/DncNumber');
    proto.resource.Fulfilled = require('./Resource/Fulfilled');
    proto.resource.InboundCallConfiguration = require('./Resource/InboundCallConfiguration');
    proto.resource.InboundConfig = require('./Resource/InboundConfig');
    proto.resource.IvrBroadcastConfig = require('./Resource/IvrBroadcastConfig');
    proto.resource.IvrInboundConfig = require('./Resource/IvrInboundConfig');
    proto.resource.Keyword = require('./Resource/Keyword');
    proto.resource.Label = require('./Resource/Label');
    proto.resource.LeaseInfo = require('./Resource/LeaseInfo');
    proto.resource.LocalTimeZoneRestriction = require('./Resource/LocalTimeZoneRestriction');
    proto.resource.Number = require('./Resource/Number');
    proto.resource.NumberConfiguration = require('./Resource/NumberConfiguration');
    proto.resource.NumberOrder = require('./Resource/NumberOrder');
    proto.resource.NumberOrderItem = require('./Resource/NumberOrderItem');
    proto.resource.Question = require('./Resource/Question');
    proto.resource.QuestionResponse = require('./Resource/QuestionResponse');
    proto.resource.RecordingMeta = require('./Resource/RecordingMeta');
    proto.resource.Region = require('./Resource/Region');
    proto.resource.ResultStat = require('./Resource/ResultStat');
    proto.resource.RetryConfig = require('./Resource/RetryConfig');
    proto.resource.RetryPhoneTypes = require('./Resource/RetryPhoneTypes');
    proto.resource.RetryResults = require('./Resource/RetryResults');
    proto.resource.SoundMeta = require('./Resource/SoundMeta');
    proto.resource.Subscription = require('./Resource/Subscription');
    proto.resource.SubscriptionFilter = require('./Resource/SubscriptionFilter');
    proto.resource.Text = require('./Resource/Text');
    proto.resource.TextBroadcastConfig = require('./Resource/TextBroadcastConfig');
    proto.resource.TextRecord = require('./Resource/TextRecord');
    proto.resource.TextToSpeech = require('./Resource/TextToSpeech');
    proto.resource.ToNumber = require('./Resource/ToNumber');
    proto.resource.TransferNumber = require('./Resource/TransferNumber');
    proto.resource.UsageStats = require('./Resource/UsageStats');
    proto.resource.VoiceBroadcastConfig = require('./Resource/VoiceBroadcastConfig');

    proto.request.AddAgentGroups = require('./Request/AddAgentGroups');
    proto.request.AddAgents = require('./Request/AddAgents');
    proto.request.AddContactsToList = require('./Request/AddContactsToList');
    proto.request.AddNumbersToDncList = require('./Request/AddNumbersToDncList');
    proto.request.ConfigureNumber = require('./Request/ConfigureNumber');
    proto.request.ControlBroadcast = require('./Request/ControlBroadcast');
    proto.request.ControlCccCampaign = require('./Request/ControlCccCampaign');
    proto.request.ControlContactBatch = require('./Request/ControlContactBatch');
    proto.request.CreateAgentGroup = require('./Request/CreateAgentGroup');
    proto.request.CreateAutoReply = require('./Request/CreateAutoReply');
    proto.request.CreateBroadcast = require('./Request/CreateBroadcast');
    proto.request.CreateBroadcastSchedule = require('./Request/CreateBroadcastSchedule');
    proto.request.CreateCccCampaign = require('./Request/CreateCccCampaign');
    proto.request.CreateContactBatch = require('./Request/CreateContactBatch');
    proto.request.CreateContactList = require('./Request/CreateContactList');
    proto.request.CreateDncList = require('./Request/CreateDncList');
    proto.request.CreateNumberOrder = require('./Request/CreateNumberOrder');
    proto.request.CreateSound = require('./Request/CreateSound');
    proto.request.CreateSubscription = require('./Request/CreateSubscription');
    proto.request.DeleteLabel = require('./Request/DeleteLabel');
    proto.request.GetAgentGroups = require('./Request/GetAgentGroups');
    proto.request.GetAgentInviteUri = require('./Request/GetAgentInviteUri');
    proto.request.GetAgents = require('./Request/GetAgents');
    proto.request.GetBroadcastStats = require('./Request/GetBroadcastStats');
    proto.request.GetCallerIds = require('./Request/GetCallerIds');
    proto.request.GetCccCampaignStats = require('./Request/GetCccCampaignStats');
    proto.request.GetContactHistory = require('./Request/GetContactHistory');
    proto.request.GetNumber = require('./Request/GetNumber');
    proto.request.LabelBroadcast = require('./Request/LabelBroadcast');
    proto.request.LabelNumber = require('./Request/LabelNumber');
    proto.request.QueryAgentGroups = require('./Request/QueryAgentGroups');
    proto.request.QueryAgentSessions = require('./Request/QueryAgentSessions');
    proto.request.QueryAgents = require('./Request/QueryAgents');
    proto.request.QueryAutoReplies = require('./Request/QueryAutoReplies');
    proto.request.QueryBroadcastSchedule = require('./Request/QueryBroadcastSchedule');
    proto.request.QueryBroadcasts = require('./Request/QueryBroadcasts');
    proto.request.QueryCalls = require('./Request/QueryCalls');
    proto.request.QueryCccCampaigns = require('./Request/QueryCccCampaigns');
    proto.request.QueryContactBatches = require('./Request/QueryContactBatches');
    proto.request.QueryContactLists = require('./Request/QueryContactLists');
    proto.request.QueryContacts = require('./Request/QueryContacts');
    proto.request.QueryDncLists = require('./Request/QueryDncLists');
    proto.request.QueryDncNumbers = require('./Request/QueryDncNumbers');
    proto.request.QueryKeywords = require('./Request/QueryKeywords');
    proto.request.QueryLabels = require('./Request/QueryLabels');
    proto.request.QueryNumbers = require('./Request/QueryNumbers');
    proto.request.QueryRegions = require('./Request/QueryRegions');
    proto.request.QuerySoundMeta = require('./Request/QuerySoundMeta');
    proto.request.QuerySubscriptions = require('./Request/QuerySubscriptions');
    proto.request.QueryTexts = require('./Request/QueryTexts');
    proto.request.Release = require('./Request/Release');
    proto.request.RemoveAgent = require('./Request/RemoveAgent');
    proto.request.RemoveAgentGroup = require('./Request/RemoveAgentGroup');
    proto.request.RemoveContacts = require('./Request/RemoveContacts');
    proto.request.RemoveContactsFromList = require('./Request/RemoveContactsFromList');
    proto.request.RemoveNumbersFromDncList = require('./Request/RemoveNumbersFromDncList');
    proto.request.SearchAvailableKeywords = require('./Request/SearchAvailableKeywords');
    proto.request.SearchAvailableNumbers = require('./Request/SearchAvailableNumbers');
    proto.request.SendAgentInvites = require('./Request/SendAgentInvites');
    proto.request.SendCall = require('./Request/SendCall');
    proto.request.SendText = require('./Request/SendText');
    proto.request.SendVerificationCodeToCallerId = require('./Request/SendVerificationCodeToCallerId');
    proto.request.UnlabelBroadcast = require('./Request/UnlabelBroadcast');
    proto.request.UnlabelNumber = require('./Request/UnlabelNumber');
    proto.request.UpdateAgentGroup = require('./Request/UpdateAgentGroup');
    proto.request.UpdateBroadcast = require('./Request/UpdateBroadcast');
    proto.request.UpdateCccCampaign = require('./Request/UpdateCccCampaign');
    proto.request.UpdateContacts = require('./Request/UpdateContacts');
    proto.request.UpdateDncNumber = require('./Request/UpdateDncNumber');
    proto.request.UpdateSubscription = require('./Request/UpdateSubscription');
    proto.request.VerifyCallerId = require('./Request/VerifyCallerId');
