/**
 *
 * PrivacyPolicies
 *
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';

import { PrivacyPoliciesWrapper } from './styled';

interface Props {}

export const PrivacyPolicies = memo((props: Props) => {
  return (
    <>
      <Helmet>
        <title>PrivacyPolicies</title>
        <meta name="description" content="Description of PrivacyPolicies" />
      </Helmet>
      <PrivacyPoliciesWrapper>
        <h2 className="text-center">Privacy Policy</h2>
        <div className="block">
          <h3>CONTENTS</h3>
          <ul>
            <li>Collection of Information</li>
            <li>Use of Information</li>
            <li>Sharing of Information</li>
            <li>Your Choices</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="block">
          <h3>COLLECTION OF INFORMATION</h3>
          <div className="block-item">
            <h4>Information You Provide to Us</h4>
            <p>
              We collect information you provide directly to us. For example,
              you share information directly with us when you create an account,
              fill out a form, submit or post content through our Services,
              purchase a membership, communicate with us via third-party
              platforms, request customer support, or otherwise communicate with
              us. The types of personal information we may collect include your
              name, display name, username, bio, email address, business
              information, your content, including your avatar image, photos,
              posts, responses, and series published by you, and any other
              information you choose to provide.
            </p>
            <p>
              In some cases, we may also collect information you provide about
              others, such as when you purchase a Panoee membership as a gift
              for someone. We will use this information to fulfill your request
              and will not send communications to your contacts unrelated to
              your request, unless they separately consent to receive
              communications from us or otherwise engage with us.
            </p>
            <p>
              We do not collect payment information through our Services. We
              rely on third parties to process payments in connection with our
              Services. Any information you provide to facilitate such a payment
              is subject to the third-party payment processor’s privacy policy,
              and we encourage you to review this policy before you provide any
              information to the payment processor.
            </p>
          </div>
          <div className="block-item">
            <h4>
              Information We Collect Automatically When You Interact with Us
            </h4>
            <p>
              In some instances, we automatically collect certain information,
              including:
            </p>
            <ul>
              <li>
                <h5>Activity Information:</h5>
                <p>
                  We collect information about your activity on our Services,
                  such as your reading history and when you share links, follow
                  users, highlight posts, and clap for posts.
                </p>
              </li>
              <li>
                <h5>Transactional Information:</h5>
                <p>
                  When you purchase a membership, we collect information about
                  the transaction, such as subscription details, purchase price,
                  and the date of the transaction.
                </p>
              </li>
              <li>
                <h5>Device and Usage Information:</h5>
                <p>
                  We collect information about how you access our Services,
                  including data about the device and network you use, such as
                  your hardware model, operating system version, mobile network,
                  IP address, unique device identifiers, browser type, and app
                  version. We also collect information about your activity on
                  our Services, such as access times, pages viewed, links
                  clicked, and the page you visited before navigating to our
                  Services.
                </p>
              </li>
              <li>
                <h5>
                  Information Collected by Cookies and Similar Tracking
                  Technologies:
                </h5>
                <p>
                  We use tracking technologies, such as cookies and web beacons,
                  to collect information about you. Cookies are small data files
                  stored on your hard drive or in device memory that help us
                  improve our Services and your experience, see which areas and
                  features of our Services are popular, and count visits. Web
                  beacons (also known as “pixel tags” or “clear GIFs”) are
                  electronic images that we use on our Services and in our
                  emails to help deliver cookies, count visits, and understand
                  usage. We also work with third party analytics providers who
                  use cookies, web beacons, device identifiers, and other
                  technologies to collect information about your use of our
                  Services and other websites and applications, including your
                  IP address, web browser, mobile network information, pages
                  viewed, time spent on pages or in mobile apps, and links
                  clicked. This information may be used by Panoee and others to,
                  among other things, analyze and track data, determine the
                  popularity of certain content, deliver content targeted to
                  your interests on our Services, and better understand your
                  online activity. For more information about cookies and how to
                  disable them, see Your Choices below.
                </p>
              </li>
            </ul>
          </div>
          <div className="block-item">
            <h4>Information We Collect from Other Sources</h4>
            <p>
              We obtain information from third-party sources. For example, we
              may collect information about you from social networks, accounting
              services providers and data analytics providers. Additionally, if
              you create or log into your Panoee account through a third-party
              platform (such as Apple, Facebook, Google, or Twitter), we will
              have access to certain information from that platform, such as
              your name, lists of friends or followers, birthday, and profile
              picture, in accordance with the authorization procedures
              determined by such platform.
            </p>
          </div>
          <div className="block-item">
            <h4>Information We Derive</h4>
            <p>
              We may derive information or draw inferences about you based on
              the information we collect. For example, we may make inferences
              about your location based on your IP address or infer reading
              preferences based on your reading history.
            </p>
          </div>
        </div>

        <div className="block">
          <h3>USE OF INFORMATION</h3>
          <p>
            We use the information we collect to provide, maintain, and improve
            our Services, which includes publishing and distributing
            user-generated content, personalizing the posts you see and
            operating our metered paywall. We also use the information we
            collect to:
          </p>
          <ul>
            <li>Create and maintain your Panoee account;</li>
            <li>
              Process transactions and send related information, such as
              confirmations, receipts, and user experience surveys;
            </li>
            <li>
              Send you technical notices, security alerts, and support and
              administrative messages;
            </li>
            <li>
              Respond to your comments and questions and provide customer
              service;
            </li>
            <li>
              Communicate with you about new content, products, services, and
              features offered by Panoee and provide other news and information
              we think will interest you (see Your Choices below for information
              about how to opt out of these communications at any time);
            </li>
            <li>
              Monitor and analyze trends, usage, and activities in connection
              with our Services;
            </li>
            <li>
              Detect, investigate, and prevent security incidents and other
              malicious, deceptive, fraudulent, or illegal activity and protect
              the rights and property of Panoee and others;
            </li>
            <li>Debug to identify and repair errors in our Services;</li>
            <li>Comply with our legal and financial obligations; and</li>
            <li>
              Carry out any other purpose described to you at the time the
              information was collected.
            </li>
          </ul>
        </div>

        <div className="block">
          <h3>SHARING OF INFORMATION</h3>
          <p>
            We share personal information in the following circumstances or as
            otherwise described in this policy:
          </p>
          <ul>
            <li>
              We share personal information with other users of the Services.
              For example, if you use our Services to publish content, post
              comments or send private notes, certain information about you will
              be visible to others, such as your name, photo, bio, other account
              information you may provide, and information about your activities
              on our Services (e.g., your followers and who you follow, recent
              posts, claps, highlights, and responses).
            </li>
            <li>
              We share personal information with vendors, service providers, and
              consultants that need access to personal information in order to
              perform services for us, such as companies that assist us with web
              hosting, storage, and other infrastructure, analytics, payment
              processing, fraud prevention and security, customer service,
              communications, and marketing.
            </li>
            <li>
              We may disclose personal information if we believe that disclosure
              is in accordance with, or required by, any applicable law or legal
              process, including lawful requests by public authorities to meet
              national security or law enforcement requirements. If we are going
              to disclose your personal information in response to legal
              process, we will give you notice so you can challenge it (for
              example by seeking court intervention), unless we are prohibited
              by law or believe doing so may endanger others or cause illegal
              conduct. We will object to legal requests for information about
              users of our Services that we believe are improper.
            </li>
            <li>
              We may share personal information if we believe that your actions
              are inconsistent with our user agreements or policies, if we
              believe that you have violated the law, or if we believe it is
              necessary to protect the rights, property, and safety of Panoee,
              our users, the public, or others.
            </li>
            <li>
              We share personal information with our lawyers and other
              professional advisors where necessary to obtain advice or
              otherwise protect and manage our business interests.
            </li>
            <li>
              We may share personal information in connection with, or during
              negotiations concerning, any merger, sale of company assets,
              financing, or acquisition of all or a portion of our business by
              another company.
            </li>
            Personal information is shared between and among Panoee and our
            current and future parents, affiliates, and subsidiaries and other
            companies under common control and ownership.
            <li>
              We share personal information with your consent or at your
              direction.
            </li>
            <li>
              We also share aggregated or de-identified information that cannot
              reasonably be used to identify you.
            </li>
          </ul>
        </div>

        <div className="block">
          <h3>YOUR CHOICES</h3>
          <div className="block-item mt-0">
            <h4>Account Information</h4>
            <p>
              You may access, correct, delete and export your account
              information at any time by logging into the Services and
              navigating to the Settings page. Please note that if you choose to
              delete your account, we may continue to retain certain information
              about you as required by law or for our legitimate business
              purposes.
            </p>
          </div>
          <div className="block-item">
            <h4>Cookies</h4>
            <p>
              Most web browsers are set to accept cookies by default. If you
              prefer, you can usually adjust your browser settings to remove or
              reject browser cookies. Please note that removing or rejecting
              cookies could affect the availability and functionality of our
              Services.
            </p>
          </div>
          <div className="block-item">
            <h4>Communications Preferences</h4>
            <p>
              You may opt out of receiving certain communications from us, such
              as digests, newsletters, and activity notifications, by following
              the instructions in those communications or through your account’s
              Settings page. If you opt out, we may still send you
              administrative emails, such as those about your account or our
              ongoing business relations.
            </p>
          </div>
          <div className="block-item">
            <h4>Mobile Push Notifications</h4>
            <p>
              With your consent, we may send push notifications to your mobile
              device. You can deactivate these messages at any time by changing
              the notification settings on your mobile device.
            </p>
          </div>
        </div>

        <div className="block">
          <h3>CONTACT US</h3>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at nguyenmanhcuong.stf@gmail.com
          </p>
        </div>
      </PrivacyPoliciesWrapper>
    </>
  );
});
